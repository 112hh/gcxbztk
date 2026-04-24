const http = require("http");
const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
const { DatabaseSync } = require("node:sqlite");
const XLSX = require("xlsx");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(ROOT, "data"));
const DATA_FILE = path.join(DATA_DIR, "themes.json");
const DB_FILE = path.join(DATA_DIR, "app.db");
const THEMES_SEED_FILE = path.join(ROOT, "seeds", "themes.seed.json");
const STATIC_FILES = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/styles.css", "styles.css"],
  ["/script.js", "script.js"]
]);

const INITIAL_GENE_PROJECTS = [
  {
    id: "gene-lysine",
    name: "高产L-赖氨酸菌株筛选",
    strain: "大肠杆菌",
    phenotype: "产量",
    method: "GWAS分析",
    threshold: "0.05",
    status: "已完成",
    samples: "1,256",
    sites: "48",
    createdAt: "2024-01-15 10:30",
    updatedAt: "2024-01-16 16:20",
    description:
      "针对L-赖氨酸高产菌株进行全基因组关联分析，筛选与产量相关的显著位点，为后续菌株改造提供分子标记。",
    dataset: {
      name: "L-赖氨酸表型型数据_V2",
      type: "VCF",
      size: "256.78 MB",
      sites: "2,456,789",
      uploadedAt: "2024-01-15 10:35:00"
    }
  },
  {
    id: "gene-ethanol",
    name: "乙醇耐受酵母菌株分析",
    strain: "酵母菌",
    phenotype: "生长速率",
    method: "关联分析",
    threshold: "0.05",
    status: "分析中",
    samples: "892",
    sites: "16",
    createdAt: "2024-01-18 14:20",
    updatedAt: "2024-01-19 09:15",
    description: "围绕乙醇耐受表型筛选关键突变位点，构建酵母耐受调控候选基因列表。",
    dataset: {
      name: "乙醇耐受菌株数据集_A1",
      type: "VCF",
      size: "184.32 MB",
      sites: "1,823,504",
      uploadedAt: "2024-01-18 14:35:00"
    }
  },
  {
    id: "gene-bacillus",
    name: "芽孢杆菌蛋白酶表达优化",
    strain: "芽孢杆菌",
    phenotype: "底物利用率",
    method: "候选位点分析",
    threshold: "0.05",
    status: "失败",
    samples: "456",
    sites: "0",
    createdAt: "2024-01-20 09:15",
    updatedAt: "2024-01-20 18:40",
    description: "尝试构建蛋白酶高表达相关位点模型，当前因样本分层不足导致结果未通过质控。",
    dataset: {
      name: "蛋白酶筛选批次_B4",
      type: "CSV",
      size: "78.45 MB",
      sites: "438,226",
      uploadedAt: "2024-01-20 09:40:00"
    }
  }
];

const INITIAL_ANALYSIS_ITEMS = [
  {
    id: "omics-1",
    module: "omics",
    payload: {
      id: "omics-1",
      name: "大肠杆菌K-12中心代谢模型",
      strain: "大肠杆菌",
      type: "基于基因组",
      reactions: "2,156",
      metabolites: "1,892",
      flux: "3.24",
      status: { text: "已验证", className: "is-valid" },
      createdAt: "2024-01-15 10:30",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "omics-2",
    module: "omics",
    payload: {
      id: "omics-2",
      name: "酿酒酵母中心碳代谢模型",
      strain: "酵母菌",
      type: "基于代谢组",
      reactions: "1,876",
      metabolites: "1,423",
      flux: "8.56",
      status: { text: "已验证", className: "is-valid" },
      createdAt: "2024-01-18 14:20",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "process-1",
    module: "process",
    payload: {
      id: "process-1",
      name: "谷氨酸发酵过程优化",
      model: "代谢网络模型",
      strain: "谷氨酸棒杆菌",
      goal: "产量最大化",
      createdAt: "2024-01-15 10:30",
      status: { text: "已验证", className: "is-valid" },
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "process-2",
    module: "process",
    payload: {
      id: "process-2",
      name: "LSTM发酵预测模型",
      model: "神经网络模型",
      strain: "大肠杆菌",
      goal: "生成速率最大化",
      createdAt: "2024-01-18 14:20",
      status: { text: "已验证", className: "is-valid" },
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "full-1",
    module: "full",
    payload: {
      id: "full-1",
      name: "谷氨酸全流程优化分析",
      strain: "谷氨酸棒杆菌",
      status: { text: "已完成", className: "is-done" },
      createdAt: "2024-01-15 10:30",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "full-2",
    module: "full",
    payload: {
      id: "full-2",
      name: "赖氨酸生产菌株全流程分析",
      strain: "大肠杆菌",
      status: { text: "进行中", className: "is-progress" },
      createdAt: "2024-01-18 14:20",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "service-1",
    module: "service",
    payload: {
      id: "service-1",
      code: "EC001",
      name: "高产L-赖氨酸工程菌",
      strain: "谷氨酸棒杆菌",
      gene: "lysC::338V, ask::P48S, hom::303V",
      status: { text: "已验证", className: "is-valid" },
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  },
  {
    id: "service-2",
    module: "service",
    payload: {
      id: "service-2",
      code: "EC002",
      name: "高效乙醇生产菌株",
      strain: "大肠杆菌",
      gene: "pdc::over, adh::up, glc::transport",
      status: { text: "已验证", className: "is-valid" },
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" }
      ]
    }
  }
];

fsSync.mkdirSync(DATA_DIR, { recursive: true });

function ensureThemesFile() {
  if (fsSync.existsSync(DATA_FILE)) {
    return;
  }

  if (fsSync.existsSync(THEMES_SEED_FILE)) {
    const seed = fsSync.readFileSync(THEMES_SEED_FILE, "utf8");
    fsSync.writeFileSync(DATA_FILE, seed.trimEnd() + "\n", "utf8");
    return;
  }

  fsSync.writeFileSync(DATA_FILE, "[]\n", "utf8");
}

ensureThemesFile();

const db = new DatabaseSync(DB_FILE);

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

async function sendStatic(response, fileName) {
  const filePath = path.join(ROOT, fileName);
  const content = await fs.readFile(filePath);
  const extension = path.extname(filePath);
  const contentType =
    extension === ".html"
      ? "text/html; charset=utf-8"
      : extension === ".css"
        ? "text/css; charset=utf-8"
        : "application/javascript; charset=utf-8";

  response.writeHead(200, { "Content-Type": contentType });
  response.end(content);
}

async function readThemes() {
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw);
}

async function writeThemes(themes) {
  await fs.writeFile(DATA_FILE, `${JSON.stringify(themes, null, 2)}\n`, "utf8");
}

function parseBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("请求体不是合法 JSON"));
      }
    });
    request.on("error", reject);
  });
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function nowDateTimeString() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function nowPreciseString() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function unique(values) {
  return [...new Set(values)];
}

function computeStats(themes) {
  return {
    total: themes.length,
    highPriority: themes.filter((theme) => theme.priority === "high").length,
    categories: unique(themes.map((theme) => theme.category)).length,
    owners: unique(themes.map((theme) => theme.owner)).length,
    recent: themes
      .slice()
      .sort((a, b) => new Date(b.updated) - new Date(a.updated))
      .slice(0, 4)
      .map((theme) => `${theme.updated} · ${theme.name}`)
  };
}

function applyQuery(themes, searchParams) {
  const search = (searchParams.get("search") || "").trim().toLowerCase();
  const category = (searchParams.get("category") || "").trim();
  const sort = searchParams.get("sort") || "priority";

  let items = themes.filter((theme) => {
    const matchesCategory = !category || theme.category === category;
    const matchesSearch =
      !search ||
      [
        theme.name,
        theme.category,
        theme.owner,
        theme.summary,
        theme.objective,
        ...(theme.tags || []),
        ...(theme.milestones || [])
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);

    return matchesCategory && matchesSearch;
  });

  items = items.sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name, "zh-CN");
    }

    if (sort === "updated") {
      return new Date(b.updated) - new Date(a.updated);
    }

    const rank = { high: 0, medium: 1, low: 2 };
    return (
      (rank[a.priority] ?? 9) - (rank[b.priority] ?? 9) ||
      new Date(b.updated) - new Date(a.updated)
    );
  });

  return items;
}

function sanitizeList(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function sanitizeMetrics(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => ({
      label: String(item?.label || "").trim(),
      value: String(item?.value || "").trim()
    }))
    .filter((item) => item.label && item.value);
}

function validateTheme(input, existingId) {
  const theme = {
    id: existingId || `t_${randomUUID().slice(0, 8)}`,
    name: String(input.name || "").trim(),
    category: String(input.category || "").trim(),
    priority: String(input.priority || "").trim(),
    owner: String(input.owner || "").trim(),
    updated: String(input.updated || "").trim() || todayString(),
    summary: String(input.summary || "").trim(),
    objective: String(input.objective || "").trim(),
    tags: sanitizeList(input.tags),
    metrics: sanitizeMetrics(input.metrics),
    milestones: sanitizeList(input.milestones)
  };

  if (!theme.name) {
    throw new Error("主题名称不能为空");
  }
  if (!theme.category) {
    throw new Error("分类不能为空");
  }
  if (!["high", "medium", "low"].includes(theme.priority)) {
    throw new Error("优先级必须是 high、medium 或 low");
  }
  if (!theme.owner) {
    throw new Error("负责人不能为空");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(theme.updated)) {
    throw new Error("更新时间必须是 YYYY-MM-DD");
  }
  if (!theme.summary) {
    throw new Error("摘要不能为空");
  }
  if (!theme.objective) {
    throw new Error("目标说明不能为空");
  }
  if (theme.metrics.length === 0) {
    throw new Error("指标至少填写一项，格式为 label:value");
  }
  if (theme.milestones.length === 0) {
    throw new Error("里程碑至少填写一项");
  }

  return theme;
}

function initGeneProjectDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS gene_projects (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      strain TEXT NOT NULL,
      phenotype TEXT NOT NULL,
      method TEXT NOT NULL,
      threshold TEXT NOT NULL,
      status TEXT NOT NULL,
      samples TEXT NOT NULL,
      sites TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      description TEXT NOT NULL,
      dataset_name TEXT NOT NULL,
      dataset_type TEXT NOT NULL,
      dataset_size TEXT NOT NULL,
      dataset_sites TEXT NOT NULL,
      dataset_uploaded_at TEXT NOT NULL
    );
  `);

  const countRow = db.prepare("SELECT COUNT(*) AS count FROM gene_projects").get();
  if (countRow.count > 0) {
    return;
  }

  const insert = db.prepare(`
    INSERT INTO gene_projects (
      id, name, strain, phenotype, method, threshold, status, samples, sites,
      created_at, updated_at, description,
      dataset_name, dataset_type, dataset_size, dataset_sites, dataset_uploaded_at
    ) VALUES (
      @id, @name, @strain, @phenotype, @method, @threshold, @status, @samples, @sites,
      @createdAt, @updatedAt, @description,
      @datasetName, @datasetType, @datasetSize, @datasetSites, @datasetUploadedAt
    )
  `);

  db.exec("BEGIN");
  try {
    INITIAL_GENE_PROJECTS.forEach((item) => {
      insert.run({
        id: item.id,
        name: item.name,
        strain: item.strain,
        phenotype: item.phenotype,
        method: item.method,
        threshold: item.threshold,
        status: item.status,
        samples: item.samples,
        sites: item.sites,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        description: item.description,
        datasetName: item.dataset.name,
        datasetType: item.dataset.type,
        datasetSize: item.dataset.size,
        datasetSites: item.dataset.sites,
        datasetUploadedAt: item.dataset.uploadedAt
      });
    });
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

function initModuleDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS analysis_items (
      id TEXT PRIMARY KEY,
      module TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sensor_records (
      id TEXT PRIMARY KEY,
      module TEXT NOT NULL,
      batch_id TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sensor_thresholds (
      module TEXT PRIMARY KEY,
      config_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  const analysisCount = db.prepare("SELECT COUNT(*) AS count FROM analysis_items").get();
  if (analysisCount.count === 0) {
    const insert = db.prepare(`
      INSERT INTO analysis_items (id, module, payload_json, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?)
    `);

    db.exec("BEGIN");
    try {
      INITIAL_ANALYSIS_ITEMS.forEach((item) => {
        const timestamp = item.payload.createdAt || nowDateTimeString();
        insert.run(item.id, item.module, JSON.stringify(item.payload), timestamp, timestamp);
      });
      db.exec("COMMIT");
    } catch (error) {
      db.exec("ROLLBACK");
      throw error;
    }
  }
}

function listAnalysisItems(module) {
  return db
    .prepare("SELECT id, payload_json FROM analysis_items WHERE module = ? ORDER BY datetime(updated_at) DESC, id ASC")
    .all(module)
    .map((row) => JSON.parse(row.payload_json));
}

function getAnalysisItem(id) {
  const row = db.prepare("SELECT module, payload_json FROM analysis_items WHERE id = ?").get(id);
  if (!row) {
    return null;
  }

  return {
    module: row.module,
    item: JSON.parse(row.payload_json)
  };
}

function validateAnalysisItem(input, current = null) {
  const moduleKey = String(input.module || current?.module || "").trim();
  if (!["omics", "process", "full", "service"].includes(moduleKey)) {
    throw new Error("模块类型不支持");
  }

  const currentItem = current?.item || {};
  const statusText = String(input.statusText || input.status?.text || currentItem.status?.text || "").trim();
  const statusClass = String(input.statusClass || input.status?.className || currentItem.status?.className || "").trim();
  const createdAt = String(input.createdAt || currentItem.createdAt || nowDateTimeString()).trim() || nowDateTimeString();
  const item = {
    id: currentItem.id || String(input.id || "").trim() || `${moduleKey}_${randomUUID().slice(0, 8)}`,
    ...currentItem,
    ...input,
    createdAt,
    status: {
      text: statusText || "进行中",
      className: statusClass || "is-progress"
    }
  };

  delete item.module;
  delete item.statusText;
  delete item.statusClass;

  if (!item.name) {
    throw new Error("名称不能为空");
  }

  if (moduleKey === "service" && !String(item.code || "").trim()) {
    throw new Error("细胞编号不能为空");
  }

  return {
    module: moduleKey,
    item: {
      ...item,
      actions:
        moduleKey === "service"
          ? [
              { id: "edit", label: "编辑", tone: "blue" },
              { id: "detail", label: "详情", tone: "blue" },
              { id: "delete", label: "删除", tone: "danger" }
            ]
          : [
              { id: "edit", label: "编辑", tone: "blue" },
              { id: "detail", label: moduleKey === "omics" ? "详情" : "查看详情", tone: "blue" },
              { id: "delete", label: "删除", tone: "danger" }
            ]
    }
  };
}

function saveAnalysisItem(entry) {
  const timestamp = nowDateTimeString();
  const itemId = String(entry?.item?.id || "").trim() || `${String(entry?.module || "analysis").trim()}_${randomUUID().slice(0, 8)}`;
  const createdAt = String(entry?.item?.createdAt || timestamp).trim() || timestamp;
  const payload = {
    ...(entry.item || {}),
    id: itemId,
    createdAt
  };

  db.prepare(`
    INSERT INTO analysis_items (id, module, payload_json, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      module = excluded.module,
      payload_json = excluded.payload_json,
      created_at = excluded.created_at,
      updated_at = excluded.updated_at
  `).run(itemId, String(entry.module || "").trim(), JSON.stringify(payload), createdAt, timestamp);

  return getAnalysisItem(itemId);
}

function normalizeImportHeader(value) {
  return String(value || "")
    .replace(/^\uFEFF/, "")
    .trim()
    .toLowerCase()
    .replace(/[：:（）()\-_/\\\s]+/g, "");
}

function mapServiceImportRow(row) {
  const normalized = new Map(
    Object.entries(row || {}).map(([key, value]) => [normalizeImportHeader(key), String(value ?? "").trim()])
  );
  const getValue = (...aliases) => {
    for (const alias of aliases) {
      const value = normalized.get(normalizeImportHeader(alias));
      if (value) {
        return value;
      }
    }
    return "";
  };

  return {
    code: getValue("细胞编号", "code"),
    name: getValue("细胞名称", "name"),
    strain: getValue("菌株类型", "strain"),
    gene: getValue("基因型", "gene"),
    statusText: getValue("状态", "status", "状态文本"),
    description: getValue("细胞描述", "描述", "description"),
    basicInfo: {
      code: getValue("细胞编号", "code"),
      name: getValue("细胞名称", "name"),
      strain: getValue("菌株类型", "strain"),
      gene: getValue("基因型", "gene"),
      statusText: getValue("状态", "status", "状态文本"),
      description: getValue("细胞描述", "描述", "description")
    },
    cultureInfo: {
      cultureCode: getValue("培养编号", "culturecode"),
      cultureMode: getValue("培养方式", "culturemode"),
      mediumFormula: getValue("培养基配方", "mediumformula"),
      temperature: getValue("培养温度℃", "培养温度", "temperature"),
      ph: getValue("ph值", "ph"),
      rpm: getValue("转速rpm", "转速", "rpm"),
      cultureStatus: getValue("培养状态", "culturestatus"),
      optimizationRecord: getValue("优化记录", "optimizationrecord")
    },
    analysisInfo: {
      testCode: getValue("检测编号", "testcode"),
      testItem: getValue("检测项目", "testitem"),
      testMethod: getValue("检测方法", "testmethod"),
      cellActivity: getValue("细胞活性", "cellactivity"),
      cellPurity: getValue("细胞纯度", "cellpurity"),
      testResult: getValue("检测结果", "testresult"),
      testDescription: getValue("检测描述", "testdescription")
    },
    applicationInfo: {
      applicationCode: getValue("应用编号", "applicationcode"),
      scenarioType: getValue("应用场景类型", "scenariotype"),
      applicationField: getValue("应用领域", "applicationfield"),
      applicationStatus: getValue("应用状态", "applicationstatus"),
      applicationContent: getValue("工程化应用信息内容", "applicationcontent")
    }
  };
}

function buildImportedServiceInput(mappedRow, current) {
  const currentItem = current?.item || {};
  const statusText = mappedRow.statusText || currentItem.status?.text || "已验证";
  return {
    ...currentItem,
    ...mappedRow,
    code: mappedRow.code || currentItem.code || "",
    name: mappedRow.name || currentItem.name || "",
    strain: mappedRow.strain || currentItem.strain || mappedRow.basicInfo?.strain || "谷氨酸棒杆菌",
    gene: mappedRow.gene || currentItem.gene || mappedRow.basicInfo?.gene || "",
    description: mappedRow.description || currentItem.description || mappedRow.basicInfo?.description || "",
    basicInfo: {
      ...(currentItem.basicInfo || {}),
      ...(mappedRow.basicInfo || {}),
      code: mappedRow.code || currentItem.basicInfo?.code || currentItem.code || "",
      name: mappedRow.name || currentItem.basicInfo?.name || currentItem.name || "",
      strain: mappedRow.strain || mappedRow.basicInfo?.strain || currentItem.basicInfo?.strain || currentItem.strain || "谷氨酸棒杆菌",
      gene: mappedRow.gene || mappedRow.basicInfo?.gene || currentItem.basicInfo?.gene || currentItem.gene || "",
      statusText,
      description: mappedRow.description || mappedRow.basicInfo?.description || currentItem.basicInfo?.description || currentItem.description || ""
    },
    cultureInfo: {
      ...(currentItem.cultureInfo || {}),
      ...(mappedRow.cultureInfo || {})
    },
    analysisInfo: {
      ...(currentItem.analysisInfo || {}),
      ...(mappedRow.analysisInfo || {})
    },
    applicationInfo: {
      ...(currentItem.applicationInfo || {}),
      ...(mappedRow.applicationInfo || {})
    },
    statusText,
    statusClass:
      statusText === "已验证"
        ? "is-valid"
        : statusText === "验证中"
          ? "is-progress"
          : statusText === "待验证"
            ? "is-pending"
            : currentItem.status?.className || "is-progress"
  };
}

function importServiceWorkbook(input) {
  const fileName = String(input.fileName || "").trim();
  const fileContent = String(input.fileContent || "").trim();
  const fileSize = Number(input.fileSize || 0);
  const extension = path.extname(fileName).toLowerCase();

  if (!fileName || !fileContent) {
    throw new Error("缺少导入文件");
  }
  if (![".csv", ".xlsx", ".xls"].includes(extension)) {
    throw new Error("仅支持导入 .csv、.xlsx、.xls 文件");
  }
  if (fileSize > 50 * 1024 * 1024) {
    throw new Error("文件大小不能超过 50MB");
  }

  const buffer = Buffer.from(fileContent, "base64");
  const workbook = XLSX.read(buffer, { type: "buffer", codepage: 65001 });
  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) {
    throw new Error("未读取到工作表内容");
  }

  const matrix = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {
    header: 1,
    defval: "",
    raw: false,
    blankrows: false
  });
  const headerIndex = matrix.findIndex((row) => (row || []).some((value) => String(value || "").trim()));
  if (headerIndex === -1) {
    throw new Error("导入文件没有可用数据");
  }

  const headers = (matrix[headerIndex] || []).map((value, index) => String(value || "").trim() || `__EMPTY_${index}`);
  const rows = matrix
    .slice(headerIndex + 1)
    .filter((row) => (row || []).some((value) => String(value || "").trim()))
    .map((row) =>
      Object.fromEntries(headers.map((header, index) => [header, String((row || [])[index] ?? "").trim()]))
    );

  if (!rows.length) {
    throw new Error("导入文件没有可用数据");
  }

  const existingByCode = new Map(
    listAnalysisItems("service")
      .map((item) => [String(item.code || item.basicInfo?.code || "").trim(), { module: "service", item }])
      .filter(([code]) => code)
  );

  const result = {
    createdCount: 0,
    updatedCount: 0,
    failedCount: 0,
    errors: []
  };

  rows.forEach((row, index) => {
    try {
      const mapped = mapServiceImportRow(row);
      const code = String(mapped.code || "").trim();
      if (!code) {
        throw new Error("细胞编号不能为空");
      }
      if (!String(mapped.name || "").trim()) {
        throw new Error("细胞名称不能为空");
      }
      if (!String(mapped.strain || "").trim()) {
        throw new Error("菌株类型不能为空");
      }

      const current = existingByCode.get(code) || null;
      const validated = validateAnalysisItem(
        {
          module: "service",
          id: current?.item?.id,
          createdAt: current?.item?.createdAt || nowDateTimeString(),
          ...buildImportedServiceInput(mapped, current)
        },
        current
      );
      const saved = saveAnalysisItem(validated);
      existingByCode.set(code, saved);
      if (current) {
        result.updatedCount += 1;
      } else {
        result.createdCount += 1;
      }
    } catch (error) {
      result.failedCount += 1;
      result.errors.push({
        row: index + 2,
        message: error.message || "导入失败"
      });
    }
  });

  return result;
}

function deleteAnalysisItem(id) {
  return db.prepare("DELETE FROM analysis_items WHERE id = ?").run(id).changes > 0;
}

function listSensorRecords(module) {
  return db
    .prepare("SELECT payload_json FROM sensor_records WHERE module = ? ORDER BY datetime(created_at) DESC, id DESC")
    .all(module)
    .map((row) => JSON.parse(row.payload_json));
}

function validateSensorRecord(input) {
  const module = String(input.module || "").trim();
  if (!["physical", "biological"].includes(module)) {
    throw new Error("传感器模块不支持");
  }

  const record = {
    id: String(input.id || "").trim() || `${module[0]}_${randomUUID().slice(0, 8)}`,
    module,
    batchId: String(input.batchId || "").trim(),
    time: String(input.time || nowPreciseString()).trim(),
    user: String(input.user || "").trim(),
    statusText: String(input.statusText || "正常").trim() || "正常",
    statusClass: String(input.statusClass || "is-normal").trim() || "is-normal",
    metrics: Array.isArray(input.metrics) ? input.metrics : [],
    detail: Array.isArray(input.detail) ? input.detail : [],
    detailCards: Array.isArray(input.detailCards) ? input.detailCards : []
  };

  if (!record.batchId) {
    throw new Error("批次不能为空");
  }
  if (!record.user) {
    throw new Error("录入人员不能为空");
  }
  if (!record.metrics.length) {
    throw new Error("至少需要一项录入指标");
  }

  return record;
}

function saveSensorRecord(record) {
  db.prepare(`
    INSERT INTO sensor_records (id, module, batch_id, payload_json, created_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(record.id, record.module, record.batchId, JSON.stringify(record), record.time);

  return record;
}

function deleteSensorRecord(id) {
  return db.prepare("DELETE FROM sensor_records WHERE id = ?").run(id).changes > 0;
}

function getSensorThresholds(module) {
  const row = db.prepare("SELECT config_json FROM sensor_thresholds WHERE module = ?").get(module);
  if (!row) {
    return null;
  }
  return JSON.parse(row.config_json);
}

function saveSensorThresholds(module, config) {
  const timestamp = nowDateTimeString();
  db.prepare(`
    INSERT INTO sensor_thresholds (module, config_json, updated_at)
    VALUES (?, ?, ?)
    ON CONFLICT(module) DO UPDATE SET
      config_json = excluded.config_json,
      updated_at = excluded.updated_at
  `).run(module, JSON.stringify(config), timestamp);

  return { module, config, updatedAt: timestamp };
}

function mapGeneProjectRow(row) {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    name: row.name,
    strain: row.strain,
    phenotype: row.phenotype,
    method: row.method,
    threshold: row.threshold,
    status: row.status,
    samples: row.samples,
    sites: row.sites,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    description: row.description,
    dataset: {
      name: row.dataset_name,
      type: row.dataset_type,
      size: row.dataset_size,
      sites: row.dataset_sites,
      uploadedAt: row.dataset_uploaded_at
    }
  };
}

function listGeneProjects() {
  return db
    .prepare("SELECT * FROM gene_projects ORDER BY datetime(updated_at) DESC, name COLLATE NOCASE ASC")
    .all()
    .map(mapGeneProjectRow);
}

function getGeneProjectById(id) {
  const row = db.prepare("SELECT * FROM gene_projects WHERE id = ?").get(id);
  return mapGeneProjectRow(row);
}

function validateGeneProject(input, currentProject = null) {
  const now = nowDateTimeString();
  const datasetNow = nowPreciseString();
  const datasetInput = input.dataset || {};
  const baseDataset = currentProject?.dataset || {};
  const project = {
    id: currentProject?.id || String(input.id || "").trim() || `g_${randomUUID().slice(0, 8)}`,
    name: String(input.name ?? currentProject?.name ?? "").trim(),
    strain: String(input.strain ?? currentProject?.strain ?? "").trim(),
    phenotype: String(input.phenotype ?? currentProject?.phenotype ?? "").trim(),
    method: String(input.method ?? currentProject?.method ?? "").trim(),
    threshold: String(input.threshold ?? currentProject?.threshold ?? "0.05").trim(),
    status: String(input.status ?? currentProject?.status ?? "分析中").trim() || "分析中",
    samples: String(input.samples ?? currentProject?.samples ?? "0").trim() || "0",
    sites: String(input.sites ?? currentProject?.sites ?? "0").trim() || "0",
    createdAt: String(input.createdAt ?? currentProject?.createdAt ?? now).trim() || now,
    updatedAt: String(input.updatedAt ?? now).trim() || now,
    description: String(input.description ?? currentProject?.description ?? "").trim(),
    dataset: {
      name: String(datasetInput.name ?? input.datasetName ?? baseDataset.name ?? `${String(input.name || currentProject?.name || "未命名项目").trim()}_数据集`).trim(),
      type: String(datasetInput.type ?? input.datasetType ?? baseDataset.type ?? "VCF").trim() || "VCF",
      size: String(datasetInput.size ?? input.datasetSize ?? baseDataset.size ?? "0 MB").trim() || "0 MB",
      sites: String(datasetInput.sites ?? input.datasetSites ?? baseDataset.sites ?? "0").trim() || "0",
      uploadedAt: String(
        datasetInput.uploadedAt ??
          input.datasetUploadedAt ??
          baseDataset.uploadedAt ??
          datasetNow
      ).trim() || datasetNow
    }
  };

  if (!project.name) {
    throw new Error("项目名称不能为空");
  }
  if (!project.strain) {
    throw new Error("菌株类型不能为空");
  }
  if (!project.phenotype) {
    throw new Error("表型类型不能为空");
  }
  if (!project.method) {
    throw new Error("分析方法不能为空");
  }
  if (!project.threshold) {
    throw new Error("显著性阈值不能为空");
  }
  if (!project.description) {
    throw new Error("项目描述不能为空");
  }

  return project;
}

function saveGeneProject(project) {
  db.prepare(`
    INSERT INTO gene_projects (
      id, name, strain, phenotype, method, threshold, status, samples, sites,
      created_at, updated_at, description,
      dataset_name, dataset_type, dataset_size, dataset_sites, dataset_uploaded_at
    ) VALUES (
      @id, @name, @strain, @phenotype, @method, @threshold, @status, @samples, @sites,
      @createdAt, @updatedAt, @description,
      @datasetName, @datasetType, @datasetSize, @datasetSites, @datasetUploadedAt
    )
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      strain = excluded.strain,
      phenotype = excluded.phenotype,
      method = excluded.method,
      threshold = excluded.threshold,
      status = excluded.status,
      samples = excluded.samples,
      sites = excluded.sites,
      created_at = excluded.created_at,
      updated_at = excluded.updated_at,
      description = excluded.description,
      dataset_name = excluded.dataset_name,
      dataset_type = excluded.dataset_type,
      dataset_size = excluded.dataset_size,
      dataset_sites = excluded.dataset_sites,
      dataset_uploaded_at = excluded.dataset_uploaded_at
  `).run({
    id: project.id,
    name: project.name,
    strain: project.strain,
    phenotype: project.phenotype,
    method: project.method,
    threshold: project.threshold,
    status: project.status,
    samples: project.samples,
    sites: project.sites,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
    description: project.description,
    datasetName: project.dataset.name,
    datasetType: project.dataset.type,
    datasetSize: project.dataset.size,
    datasetSites: project.dataset.sites,
    datasetUploadedAt: project.dataset.uploadedAt
  });

  return getGeneProjectById(project.id);
}

function deleteGeneProject(id) {
  const result = db.prepare("DELETE FROM gene_projects WHERE id = ?").run(id);
  return result.changes > 0;
}

async function handleThemesApi(request, response, url) {
  const pathname = url.pathname;
  const themes = await readThemes();

  if (request.method === "GET" && pathname === "/api/themes") {
    const items = applyQuery(themes, url.searchParams);
    sendJson(response, 200, {
      items,
      total: items.length,
      categories: unique(themes.map((theme) => theme.category)).sort((a, b) =>
        a.localeCompare(b, "zh-CN")
      ),
      stats: computeStats(themes)
    });
    return;
  }

  const themeIdMatch = pathname.match(/^\/api\/themes\/([^/]+)$/);
  if (!themeIdMatch) {
    sendJson(response, 404, { message: "接口不存在" });
    return;
  }

  const themeId = themeIdMatch[1];
  const current = themes.find((theme) => theme.id === themeId);

  if (request.method === "GET") {
    if (!current) {
      sendJson(response, 404, { message: "主题不存在" });
      return;
    }
    sendJson(response, 200, { item: current });
    return;
  }

  if (request.method === "PUT") {
    if (!current) {
      sendJson(response, 404, { message: "主题不存在" });
      return;
    }

    const body = await parseBody(request);
    const nextTheme = validateTheme(body, themeId);
    const nextThemes = themes.map((theme) => (theme.id === themeId ? nextTheme : theme));
    await writeThemes(nextThemes);
    sendJson(response, 200, { item: nextTheme });
    return;
  }

  if (request.method === "DELETE") {
    if (!current) {
      sendJson(response, 404, { message: "主题不存在" });
      return;
    }

    const nextThemes = themes.filter((theme) => theme.id !== themeId);
    await writeThemes(nextThemes);
    sendJson(response, 200, { success: true });
    return;
  }

  sendJson(response, 405, { message: "不支持的请求方法" });
}

async function handleThemeCreate(request, response) {
  const themes = await readThemes();
  const body = await parseBody(request);
  const nextTheme = validateTheme(body);
  const nextThemes = [nextTheme, ...themes];
  await writeThemes(nextThemes);
  sendJson(response, 201, { item: nextTheme });
}

async function handleGeneProjectsApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/gene-projects") {
    sendJson(response, 200, { items: listGeneProjects() });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/gene-projects") {
    const body = await parseBody(request);
    const saved = saveGeneProject(validateGeneProject(body));
    sendJson(response, 201, { item: saved });
    return;
  }

  const match = url.pathname.match(/^\/api\/gene-projects\/([^/]+)$/);
  if (!match) {
    sendJson(response, 404, { message: "接口不存在" });
    return;
  }

  const projectId = match[1];
  const current = getGeneProjectById(projectId);

  if (!current) {
    sendJson(response, 404, { message: "分析项目不存在" });
    return;
  }

  if (request.method === "GET") {
    sendJson(response, 200, { item: current });
    return;
  }

  if (request.method === "PUT") {
    const body = await parseBody(request);
    const saved = saveGeneProject(validateGeneProject(body, current));
    sendJson(response, 200, { item: saved });
    return;
  }

  if (request.method === "DELETE") {
    deleteGeneProject(projectId);
    sendJson(response, 200, { success: true });
    return;
  }

  sendJson(response, 405, { message: "不支持的请求方法" });
}

async function handleAnalysisItemsApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/analysis-items") {
    const module = String(url.searchParams.get("module") || "").trim();
    if (!module) {
      sendJson(response, 400, { message: "缺少模块参数" });
      return;
    }
    sendJson(response, 200, { items: listAnalysisItems(module) });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/analysis-items") {
    const body = await parseBody(request);
    const saved = saveAnalysisItem(validateAnalysisItem(body));
    sendJson(response, 201, saved);
    return;
  }

  const match = url.pathname.match(/^\/api\/analysis-items\/([^/]+)$/);
  if (!match) {
    sendJson(response, 404, { message: "接口不存在" });
    return;
  }

  const itemId = match[1];
  const current = getAnalysisItem(itemId);
  if (!current) {
    sendJson(response, 404, { message: "记录不存在" });
    return;
  }

  if (request.method === "GET") {
    sendJson(response, 200, current);
    return;
  }

  if (request.method === "PUT") {
    const body = await parseBody(request);
    const saved = saveAnalysisItem(validateAnalysisItem({ ...body, module: current.module }, current));
    sendJson(response, 200, saved);
    return;
  }

  if (request.method === "DELETE") {
    deleteAnalysisItem(itemId);
    sendJson(response, 200, { success: true });
    return;
  }

  sendJson(response, 405, { message: "不支持的请求方法" });
}

async function handleAnalysisImportApi(request, response, url) {
  if (request.method === "POST" && url.pathname === "/api/analysis-import/service") {
    const body = await parseBody(request);
    const result = importServiceWorkbook(body);
    sendJson(response, 200, result);
    return;
  }

  sendJson(response, 405, { message: "不支持的请求方法" });
}

async function handleSensorRecordsApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/sensor-records") {
    const module = String(url.searchParams.get("module") || "").trim();
    if (!module) {
      sendJson(response, 400, { message: "缺少模块参数" });
      return;
    }
    sendJson(response, 200, { items: listSensorRecords(module) });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/sensor-records") {
    const body = await parseBody(request);
    const saved = saveSensorRecord(validateSensorRecord(body));
    sendJson(response, 201, { item: saved });
    return;
  }

  const match = url.pathname.match(/^\/api\/sensor-records\/([^/]+)$/);
  if (match && request.method === "DELETE") {
    deleteSensorRecord(match[1]);
    sendJson(response, 200, { success: true });
    return;
  }

  sendJson(response, 405, { message: "不支持的请求方法" });
}

async function handleSensorThresholdsApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/sensor-thresholds") {
    const module = String(url.searchParams.get("module") || "").trim();
    if (!module) {
      sendJson(response, 400, { message: "缺少模块参数" });
      return;
    }
    const config = getSensorThresholds(module);
    sendJson(response, 200, { module, config });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/sensor-thresholds") {
    const body = await parseBody(request);
    const module = String(body.module || "").trim();
    const config = body.config;

    if (!module) {
      sendJson(response, 400, { message: "模块参数不能为空" });
      return;
    }

    if (!Array.isArray(config)) {
      sendJson(response, 400, { message: "配置数据格式错误" });
      return;
    }

    const saved = saveSensorThresholds(module, config);
    sendJson(response, 200, saved);
    return;
  }

  sendJson(response, 405, { message: "不支持的请求方法" });
}

async function handler(request, response) {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "GET" && (url.pathname === "/health" || url.pathname === "/api/health")) {
      sendJson(response, 200, {
        status: "ok",
        uptime: Math.round(process.uptime()),
        dataDir: DATA_DIR
      });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/themes") {
      await handleThemeCreate(request, response);
      return;
    }

    if (url.pathname.startsWith("/api/themes")) {
      await handleThemesApi(request, response, url);
      return;
    }

    if (url.pathname.startsWith("/api/gene-projects")) {
      await handleGeneProjectsApi(request, response, url);
      return;
    }

    if (url.pathname.startsWith("/api/analysis-items")) {
      await handleAnalysisItemsApi(request, response, url);
      return;
    }

    if (url.pathname.startsWith("/api/analysis-import")) {
      await handleAnalysisImportApi(request, response, url);
      return;
    }

    if (url.pathname.startsWith("/api/sensor-records")) {
      await handleSensorRecordsApi(request, response, url);
      return;
    }

    if (url.pathname.startsWith("/api/sensor-thresholds")) {
      await handleSensorThresholdsApi(request, response, url);
      return;
    }

    if (STATIC_FILES.has(url.pathname)) {
      await sendStatic(response, STATIC_FILES.get(url.pathname));
      return;
    }

    sendJson(response, 404, { message: "页面不存在" });
  } catch (error) {
    sendJson(response, 500, { message: error.message || "服务器内部错误" });
  }
}

initGeneProjectDb();
initModuleDb();

const server = http.createServer(handler);

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

function shutdown(signal) {
  console.log(`${signal} received, shutting down`);
  server.close(() => {
    try {
      db.close();
    } catch {}
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
