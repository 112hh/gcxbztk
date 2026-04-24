const authScreens = {
  login: {
    heroTitle: ["专业的细胞工程", "数据管理平台"],
    bullets: [
      "海量细胞株数据资源",
      "标准化数据管理流程",
      "智能检索与分析工具",
      "多团队协作支持"
    ],
    title: "欢迎回来",
    subtitle: "请登录您的账户以访问平台资源"
  },
  register: {
    heroTitle: ["加入我们的", "科研协作社区"],
    bullets: [
      "共享最新细胞研究成果",
      "获取专业数据分析工具",
      "参与多机构合作项目",
      "获得技术支持与培训"
    ],
    title: "创建账号",
    subtitle: "填写信息注册成为平台用户"
  },
  recover: {
    heroTitle: ["找回您的", "账户访问权限"],
    bullets: [
      "通过注册邮箱快速重置密码",
      "多重验证保障账户安全",
      "如有问题请联系系统管理员"
    ],
    title: "忘记密码",
    subtitle: "通过注册邮箱重置您的账户密码"
  }
};

const sensorModules = {
  physical: {
    key: "physical",
    label: "物理传感器",
    listBreadcrumb: ["首页", "数据管理", "物理传感器"],
    formBreadcrumb: ["首页", "数据管理", "物理传感器", "新增物理参数录入"],
    batchTitle: "批次列表",
    batchIcon: "i-list",
    recordTitle: "录入记录列表",
    summary: [
      { value: "256", label: "总记录数", tone: "blue" },
      { value: "198", label: "正常数", tone: "green" },
      { value: "42", label: "预警数", tone: "orange" },
      { value: "16", label: "异常数", tone: "red" }
    ],
    entryTitle: "物理参数",
    entryTitleIcon: "i-file",
    formSectionTitle: "基础信息",
    formMetricTitle: "物理参数",
    importTitle: "批量导入物理参数数据",
    thresholdTitle: "物理参数阈值配置",
    detailTitle: "物理参数记录详情",
    importVariant: "simple",
    batches: [
      {
        id: "FB2024010101001",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-14 08:00 ~ 2024-01-16 08:00",
        records: [
          {
            id: "p-1",
            time: "2024-01-15 10:30:00",
            user: "张三",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "温度", value: "37.5℃", tone: "normal" },
              { label: "压力", value: "1.2kPa", tone: "normal" },
              { label: "pH", value: "6.85", tone: "normal" },
              { label: "溶氧", value: "5.6mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "37.5 ℃" },
              { label: "罐内压力", value: "1.2 kPa" },
              { label: "搅拌速度", value: "320 rpm" },
              { label: "气体流量", value: "2.1 L/min" },
              { label: "pH值", value: "6.85" },
              { label: "溶解氧浓度", value: "5.6 mg/L" },
              { label: "溶解CO₂浓度", value: "45.2 mg/L" },
              { label: "排气O₂分压", value: "18.5 %" },
              { label: "排气CO₂分压", value: "0.06 %" }
            ]
          },
          {
            id: "p-2",
            time: "2024-01-15 11:00:00",
            user: "李四",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "温度", value: "37.8℃", tone: "warning" },
              { label: "压力", value: "1.3kPa", tone: "normal" },
              { label: "pH", value: "6.92", tone: "normal" },
              { label: "溶氧", value: "5.4mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "37.8 ℃" },
              { label: "罐内压力", value: "1.3 kPa" },
              { label: "搅拌速度", value: "360 rpm" },
              { label: "气体流量", value: "2.4 L/min" },
              { label: "pH值", value: "6.92" },
              { label: "溶解氧浓度", value: "5.4 mg/L" },
              { label: "溶解CO₂浓度", value: "48.6 mg/L" },
              { label: "排气O₂分压", value: "17.8 %" },
              { label: "排气CO₂分压", value: "0.08 %" }
            ]
          },
          {
            id: "p-3",
            time: "2024-01-15 11:30:00",
            user: "王五",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "温度", value: "38.5℃", tone: "error" },
              { label: "压力", value: "1.6kPa", tone: "normal" },
              { label: "pH", value: "5.8", tone: "error" },
              { label: "溶氧", value: "4.2mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "38.5 ℃" },
              { label: "罐内压力", value: "1.6 kPa" },
              { label: "搅拌速度", value: "510 rpm" },
              { label: "气体流量", value: "3.2 L/min" },
              { label: "pH值", value: "5.8" },
              { label: "溶解氧浓度", value: "4.2 mg/L" },
              { label: "溶解CO₂浓度", value: "88.4 mg/L" },
              { label: "排气O₂分压", value: "14.7 %" },
              { label: "排气CO₂分压", value: "0.11 %" }
            ]
          }
        ]
      },
      {
        id: "FB2024010201001",
        badge: "低浓度",
        badgeClass: "badge-low",
        statusText: "预警",
        tone: "warning",
        period: "2024-01-16 07:30 ~ 2024-01-17 06:00",
        records: [
          {
            id: "p-4",
            time: "2024-01-16 08:30:00",
            user: "陈晨",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "温度", value: "36.8℃", tone: "normal" },
              { label: "压力", value: "1.1kPa", tone: "normal" },
              { label: "pH", value: "7.11", tone: "warning" },
              { label: "溶氧", value: "4.6mg/L", tone: "warning" }
            ],
            detail: [
              { label: "温度", value: "36.8 ℃" },
              { label: "罐内压力", value: "1.1 kPa" },
              { label: "搅拌速度", value: "285 rpm" },
              { label: "气体流量", value: "1.9 L/min" },
              { label: "pH值", value: "7.11" },
              { label: "溶解氧浓度", value: "4.6 mg/L" },
              { label: "溶解CO₂浓度", value: "52.0 mg/L" },
              { label: "排气O₂分压", value: "16.3 %" },
              { label: "排气CO₂分压", value: "0.07 %" }
            ]
          }
        ]
      },
      {
        id: "FB2024010301001",
        badge: "中浓度",
        badgeClass: "badge-mid",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-17 06:20 ~ 2024-01-18 09:20",
        records: [
          {
            id: "p-5",
            time: "2024-01-17 09:30:00",
            user: "周璇",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "温度", value: "37.2℃", tone: "normal" },
              { label: "压力", value: "1.3kPa", tone: "normal" },
              { label: "pH", value: "6.83", tone: "normal" },
              { label: "溶氧", value: "5.1mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "37.2 ℃" },
              { label: "罐内压力", value: "1.3 kPa" },
              { label: "搅拌速度", value: "330 rpm" },
              { label: "气体流量", value: "2.0 L/min" },
              { label: "pH值", value: "6.83" },
              { label: "溶解氧浓度", value: "5.1 mg/L" },
              { label: "溶解CO₂浓度", value: "43.2 mg/L" },
              { label: "排气O₂分压", value: "18.8 %" },
              { label: "排气CO₂分压", value: "0.05 %" }
            ]
          }
        ]
      },
      {
        id: "FB2024010401001",
        badge: "其他",
        badgeClass: "badge-other",
        statusText: "异常",
        tone: "error",
        period: "2024-01-18 08:10 ~ 2024-01-18 22:10",
        records: [
          {
            id: "p-6",
            time: "2024-01-18 10:10:00",
            user: "郑宁",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "温度", value: "38.7℃", tone: "error" },
              { label: "压力", value: "1.8kPa", tone: "warning" },
              { label: "pH", value: "5.6", tone: "error" },
              { label: "溶氧", value: "4.0mg/L", tone: "warning" }
            ],
            detail: [
              { label: "温度", value: "38.7 ℃" },
              { label: "罐内压力", value: "1.8 kPa" },
              { label: "搅拌速度", value: "560 rpm" },
              { label: "气体流量", value: "3.4 L/min" },
              { label: "pH值", value: "5.6" },
              { label: "溶解氧浓度", value: "4.0 mg/L" },
              { label: "溶解CO₂浓度", value: "91.3 mg/L" },
              { label: "排气O₂分压", value: "14.2 %" },
              { label: "排气CO₂分压", value: "0.12 %" }
            ]
          }
        ]
      }
    ],
    basicFields: [
      { label: "批次号", type: "select", dynamicOptions: "batches", placeholder: "请选择批次号" },
      { label: "录入时间", type: "datetime-local", placeholder: "请选择录入时间" },
      { label: "录入人员", type: "text", placeholder: "输入录入人员姓名" },
      { label: "开始发酵时间", type: "datetime-local", placeholder: "请选择时间" },
      { label: "结束发酵时间", type: "datetime-local", placeholder: "请选择时间" }
    ],
    paramFields: [
      { label: "温度(℃)", placeholder: "输入温度值", hint: "阈值: 25.0 - 36.0 ℃", type: "number", step: "0.1" },
      { label: "罐内压力(kPa)", placeholder: "输入压力值", hint: "阈值: 0.8 - 1.5 kPa", type: "number", step: "0.1" },
      { label: "搅拌速度(rpm)", placeholder: "输入搅拌速度", hint: "阈值: 100 - 500 rpm", type: "number", step: "1" },
      { label: "气体流量(L/min)", placeholder: "输入气体流量", hint: "阈值: 0.5 - 3.0 L/min", type: "number", step: "0.1" },
      { label: "pH值", placeholder: "输入pH值", hint: "阈值: 6.0 - 8.0", type: "number", step: "0.1" },
      { label: "溶解氧浓度(mg/L)", placeholder: "输入溶解氧浓度", hint: "阈值: 2.0 - 8.0 mg/L", type: "number", step: "0.1" },
      { label: "溶解CO₂浓度(mg/L)", placeholder: "输入溶解CO₂浓度", hint: "阈值: 10 - 100 mg/L", type: "number", step: "1" },
      { label: "排气O₂分压(%)", placeholder: "输入排气O₂分压", hint: "阈值: 15 - 21 %", type: "number", step: "0.1" },
      { label: "排气CO₂分压(%)", placeholder: "输入排气CO₂分压", hint: "阈值: 0.03 - 0.1 %", type: "number", step: "0.01" }
    ],
    thresholdRows: [
      { label: "温度(℃)", min: "25.0", max: "38.0", alert: "37.0" },
      { label: "罐内压力(kPa)", min: "0.8", max: "1.5", alert: "1.4" },
      { label: "搅拌速度(rpm)", min: "100", max: "500", alert: "450" },
      { label: "气体流量(L/min)", min: "0.5", max: "3.0", alert: "2.8" },
      { label: "pH值", min: "6.0", max: "8.0", alert: "7.5" },
      { label: "溶解氧浓度(mg/L)", min: "2.0", max: "8.0", alert: "7.0" },
      { label: "溶解CO₂浓度(mg/L)", min: "10.0", max: "100.0", alert: "90.0" },
      { label: "排气O₂分压(%)", min: "15.0", max: "21.0", alert: "20.0" },
      { label: "排气CO₂分压(%)", min: "0.03", max: "0.1", alert: "0.09" }
    ]
  },
  biological: {
    key: "biological",
    label: "生物传感器",
    listBreadcrumb: ["首页", "数据管理", "生物传感器"],
    formBreadcrumb: ["首页", "数据管理", "生物传感器", "新增代谢物录入"],
    batchTitle: "批次列表",
    batchIcon: "i-list",
    recordTitle: "录入记录列表",
    summary: [
      { value: "256", label: "总记录数", tone: "blue" },
      { value: "198", label: "正常数", tone: "green" },
      { value: "42", label: "预警数", tone: "orange" },
      { value: "16", label: "异常数", tone: "red" }
    ],
    entryTitle: "代谢物参数(16种多通道目标信号)",
    entryTitleIcon: "i-info",
    formSectionTitle: "基础信息",
    formMetricTitle: "代谢物参数",
    importTitle: "批量导入数据",
    thresholdTitle: "代谢物阈值配置",
    detailTitle: "代谢物记录详情",
    importVariant: "confirm",
    batches: [
      {
        id: "FB20240101001",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-14 08:00 ~ 2024-01-16 08:00",
        records: [
          {
            id: "b-1",
            time: "2024-01-15 10:30:00",
            user: "张三",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "谷氨酸", value: "12.5 g/L", tone: "normal" },
              { label: "葡萄糖", value: "45.2 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.8 g/L", tone: "normal" },
              { label: "乳酸", value: "8.6 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "12.5 g/L" },
              { label: "葡萄糖", value: "45.2 g/L" },
              { label: "丙酮酸", value: "2.8 g/L" },
              { label: "乳酸", value: "8.6 g/L" },
              { label: "柠檬酸", value: "4.2 g/L" },
              { label: "甘氨酸", value: "1.2 g/L" },
              { label: "谷氨酰胺", value: "3.5 g/L" },
              { label: "精氨酸", value: "2.1 g/L" }
            ]
          },
          {
            id: "b-2",
            time: "2024-01-15 11:00:00",
            user: "李四",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "谷氨酸", value: "18.5 g/L", tone: "warning" },
              { label: "葡萄糖", value: "52.1 g/L", tone: "normal" },
              { label: "丙酮酸", value: "3.2 g/L", tone: "normal" },
              { label: "乳酸", value: "9.1 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "18.5 g/L" },
              { label: "葡萄糖", value: "52.1 g/L" },
              { label: "丙酮酸", value: "3.2 g/L" },
              { label: "乳酸", value: "9.1 g/L" },
              { label: "柠檬酸", value: "4.9 g/L" },
              { label: "甘氨酸", value: "1.8 g/L" },
              { label: "谷氨酰胺", value: "4.0 g/L" },
              { label: "精氨酸", value: "2.7 g/L" }
            ]
          },
          {
            id: "b-3",
            time: "2024-01-15 11:30:00",
            user: "王五",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "谷氨酸", value: "35.2 g/L", tone: "error" },
              { label: "葡萄糖", value: "68.5 g/L", tone: "error" },
              { label: "丙酮酸", value: "9.8 g/L", tone: "error" },
              { label: "乳酸", value: "7.5 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "35.2 g/L" },
              { label: "葡萄糖", value: "68.5 g/L" },
              { label: "丙酮酸", value: "9.8 g/L" },
              { label: "乳酸", value: "7.5 g/L" },
              { label: "柠檬酸", value: "6.3 g/L" },
              { label: "甘氨酸", value: "4.4 g/L" },
              { label: "谷氨酰胺", value: "7.8 g/L" },
              { label: "精氨酸", value: "5.6 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240102001",
        badge: "低浓度",
        badgeClass: "badge-low",
        statusText: "预警",
        tone: "warning",
        period: "2024-01-17 09:00 ~ 2024-01-18 04:00",
        records: [
          {
            id: "b-4",
            time: "2024-01-16 09:20:00",
            user: "赵宁",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "谷氨酸", value: "16.8 g/L", tone: "warning" },
              { label: "葡萄糖", value: "48.2 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.7 g/L", tone: "normal" },
              { label: "乳酸", value: "8.0 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "16.8 g/L" },
              { label: "葡萄糖", value: "48.2 g/L" },
              { label: "丙酮酸", value: "2.7 g/L" },
              { label: "乳酸", value: "8.0 g/L" },
              { label: "柠檬酸", value: "4.0 g/L" },
              { label: "甘氨酸", value: "1.1 g/L" },
              { label: "谷氨酰胺", value: "3.1 g/L" },
              { label: "精氨酸", value: "2.0 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240103001",
        badge: "中浓度",
        badgeClass: "badge-mid",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-18 07:00 ~ 2024-01-18 22:00",
        records: [
          {
            id: "b-5",
            time: "2024-01-17 14:20:00",
            user: "陆然",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "谷氨酸", value: "11.9 g/L", tone: "normal" },
              { label: "葡萄糖", value: "42.1 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.1 g/L", tone: "normal" },
              { label: "乳酸", value: "6.9 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "11.9 g/L" },
              { label: "葡萄糖", value: "42.1 g/L" },
              { label: "丙酮酸", value: "2.1 g/L" },
              { label: "乳酸", value: "6.9 g/L" },
              { label: "柠檬酸", value: "3.6 g/L" },
              { label: "甘氨酸", value: "0.9 g/L" },
              { label: "谷氨酰胺", value: "2.8 g/L" },
              { label: "精氨酸", value: "1.8 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240104001",
        badge: "其他",
        badgeClass: "badge-other",
        statusText: "异常",
        tone: "error",
        period: "2024-01-19 05:10 ~ 2024-01-19 16:30",
        records: [
          {
            id: "b-6",
            time: "2024-01-19 09:20:00",
            user: "高源",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "谷氨酸", value: "31.6 g/L", tone: "error" },
              { label: "葡萄糖", value: "61.5 g/L", tone: "error" },
              { label: "丙酮酸", value: "9.2 g/L", tone: "error" },
              { label: "乳酸", value: "10.1 g/L", tone: "warning" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "31.6 g/L" },
              { label: "葡萄糖", value: "61.5 g/L" },
              { label: "丙酮酸", value: "9.2 g/L" },
              { label: "乳酸", value: "10.1 g/L" },
              { label: "柠檬酸", value: "6.0 g/L" },
              { label: "甘氨酸", value: "4.1 g/L" },
              { label: "谷氨酰胺", value: "7.1 g/L" },
              { label: "精氨酸", value: "5.3 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240105001",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-20 08:00 ~ 2024-01-20 18:00",
        records: [
          {
            id: "b-7",
            time: "2024-01-20 10:00:00",
            user: "林泽",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "谷氨酸", value: "13.6 g/L", tone: "normal" },
              { label: "葡萄糖", value: "46.3 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.6 g/L", tone: "normal" },
              { label: "乳酸", value: "8.2 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "13.6 g/L" },
              { label: "葡萄糖", value: "46.3 g/L" },
              { label: "丙酮酸", value: "2.6 g/L" },
              { label: "乳酸", value: "8.2 g/L" },
              { label: "柠檬酸", value: "3.8 g/L" },
              { label: "甘氨酸", value: "1.0 g/L" },
              { label: "谷氨酰胺", value: "3.0 g/L" },
              { label: "精氨酸", value: "2.2 g/L" }
            ]
          }
        ]
      }
    ],
    basicFields: [
      { label: "批次号", type: "select", dynamicOptions: "batches" },
      { label: "发酵物名称", type: "text", placeholder: "输入发酵物名称" },
      { label: "录入时间", type: "datetime-local" },
      { label: "录入人员", type: "text", placeholder: "输入录入人员姓名" },
      { label: "开始发酵时间", type: "datetime-local" },
      { label: "结束发酵时间", type: "datetime-local" }
    ],
    paramFields: [
      { label: "谷氨酸(g/L)", placeholder: "输入谷氨酸值", hint: "阈值: 0 - 50 g/L", type: "number", step: "0.01" },
      { label: "葡萄糖(g/L)", placeholder: "输入葡萄糖值", hint: "阈值: 0 - 100 g/L", type: "number", step: "0.01" },
      { label: "丙酮酸(g/L)", placeholder: "输入丙酮酸值", hint: "阈值: 0 - 10 g/L", type: "number", step: "0.01" },
      { label: "甘氨酸(g/L)", placeholder: "输入甘氨酸值", hint: "阈值: 0 - 5 g/L", type: "number", step: "0.01" },
      { label: "谷氨酰胺(g/L)", placeholder: "输入谷氨酰胺值", hint: "阈值: 0 - 8 g/L", type: "number", step: "0.01" },
      { label: "精氨酸(g/L)", placeholder: "输入精氨酸值", hint: "阈值: 0 - 5 g/L", type: "number", step: "0.01" },
      { label: "组氨酸(g/L)", placeholder: "输入组氨酸值", hint: "阈值: 0 - 3 g/L", type: "number", step: "0.01" },
      { label: "色氨酸(g/L)", placeholder: "输入色氨酸值", hint: "阈值: 0 - 4 g/L", type: "number", step: "0.01" },
      { label: "乳酸(g/L)", placeholder: "输入乳酸值", hint: "阈值: 0 - 15 g/L", type: "number", step: "0.01" },
      { label: "铵根离子(mmol/L)", placeholder: "输入铵根离子值", hint: "阈值: 0 - 200 mmol/L", type: "number", step: "1" },
      { label: "柠檬酸(g/L)", placeholder: "输入柠檬酸值", hint: "阈值: 0 - 10 g/L", type: "number", step: "0.01" },
      { label: "亮氨酸(g/L)", placeholder: "输入亮氨酸值", hint: "阈值: 0 - 6 g/L", type: "number", step: "0.01" },
      { label: "异亮氨酸(g/L)", placeholder: "输入异亮氨酸值", hint: "阈值: 0 - 4 g/L", type: "number", step: "0.01" },
      { label: "甲硫氨酸(g/L)", placeholder: "输入甲硫氨酸值", hint: "阈值: 0 - 3 g/L", type: "number", step: "0.01" },
      { label: "半胱氨酸(g/L)", placeholder: "输入半胱氨酸值", hint: "阈值: 0 - 2 g/L", type: "number", step: "0.01" },
      { label: "赖氨酸(g/L)", placeholder: "输入赖氨酸值", hint: "阈值: 0 - 8 g/L", type: "number", step: "0.01" }
    ],
    thresholdRows: [
      { label: "谷氨酸(g/L)", min: "0.00", max: "50.00", alert: "45.00" },
      { label: "葡萄糖(g/L)", min: "0.00", max: "100.00", alert: "90.00" },
      { label: "丙酮酸(g/L)", min: "0.00", max: "10.00", alert: "8.00" },
      { label: "甘氨酸(g/L)", min: "0.00", max: "5.00", alert: "4.50" },
      { label: "谷氨酰胺(g/L)", min: "0.00", max: "8.00", alert: "7.00" },
      { label: "精氨酸(g/L)", min: "0.00", max: "5.00", alert: "4.50" },
      { label: "组氨酸(g/L)", min: "0.00", max: "3.00", alert: "2.70" },
      { label: "色氨酸(g/L)", min: "0.00", max: "4.00", alert: "3.60" },
      { label: "乳酸(g/L)", min: "0.00", max: "15.00", alert: "13.50" },
      { label: "铵根离子(mmol/L)", min: "0.00", max: "200.00", alert: "180.00" }
    ]
  }
};

const analysisPages = {
  gene: {
    key: "gene",
    title: "基因型-表型分析",
    breadcrumb: ["首页", "数据管理", "基因型-表型分析"],
    primaryButton: "新增分析项目",
    headerTools: true,
    filters: [
      { label: "项目名称", type: "input", placeholder: "请输入项目名称" },
      { label: "菌株类型", type: "select", options: ["全部", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "表型类型", type: "select", options: ["全部", "产量", "生长速率", "底物利用率"] },
      { label: "分析状态", type: "select", options: ["全部", "已完成", "分析中", "失败"] }
    ],
    columns: [
      { key: "name", label: "项目名称" },
      { key: "strain", label: "菌株类型" },
      { key: "phenotype", label: "表型类型" },
      { key: "status", label: "分析状态" },
      { key: "samples", label: "样本数" },
      { key: "sites", label: "显著位点" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "高产L-赖氨酸菌株筛选",
        strain: "大肠杆菌",
        phenotype: "产量",
        status: { text: "已完成", className: "is-done" },
        samples: "1,256",
        sites: "48",
        createdAt: "2024-01-15 10:30",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "删除", tone: "danger" },
          { label: "上传数据集", tone: "danger" },
          { label: "分析结果", tone: "blue" },
          { label: "详情", tone: "blue" }
        ]
      },
      {
        name: "乙醇耐受性酵母菌株分析",
        strain: "酵母菌",
        phenotype: "生长速率",
        status: { text: "分析中", className: "is-progress" },
        samples: "892",
        sites: "-",
        createdAt: "2024-01-18 14:20",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "删除", tone: "danger" },
          { label: "上传数据集", tone: "danger" },
          { label: "分析结果", tone: "blue" },
          { label: "详情", tone: "blue" }
        ]
      },
      {
        name: "芽孢杆菌蛋白酶表达优化",
        strain: "芽孢杆菌",
        phenotype: "底物利用率",
        status: { text: "失败", className: "is-fail" },
        samples: "456",
        sites: "-",
        createdAt: "2024-01-20 09:15",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "删除", tone: "danger" },
          { label: "上传数据集", tone: "danger" },
          { label: "分析结果", tone: "blue" },
          { label: "详情", tone: "blue" }
        ]
      }
    ],
    footer: "共 3 条记录"
  },
  omics: {
    key: "omics",
    title: "组学数据分析",
    breadcrumb: ["首页", "数据管理", "组学数据分析"],
    primaryButton: "新建组学数据分析项目",
    headerTools: true,
    stats: [
      { icon: "i-folder", iconClass: "is-blue", value: "28", label: "代谢模型数量" },
      { icon: "i-user", iconClass: "is-green", value: "1,856", label: "平均代谢数" },
      { icon: "i-doc", iconClass: "is-yellow", value: "4,231", label: "平均基因数" },
      { icon: "i-bars", iconClass: "is-cyan", value: "2.34", label: "目标通量 (mmol/g/h)" }
    ],
    filters: [
      { label: "模型名称", type: "input", placeholder: "请输入模型名称" },
      { label: "菌株类型", type: "select", options: ["全部", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "模型类型", type: "select", options: ["全部", "基于基因组", "基于代谢组", "基于转录组"] },
      { label: "状态", type: "select", options: ["全部", "已验证", "优化中", "验证中"] }
    ],
    columns: [
      { key: "name", label: "模型名称" },
      { key: "strain", label: "菌株类型" },
      { key: "type", label: "模型类型" },
      { key: "reactions", label: "反应数" },
      { key: "metabolites", label: "代谢物数" },
      { key: "flux", label: "预测通量" },
      { key: "status", label: "状态" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "大肠杆菌K-12中心代谢模型",
        strain: "大肠杆菌",
        type: "基于基因组",
        reactions: "2,156",
        metabolites: "1,892",
        flux: "3.24",
        status: { text: "已验证", className: "is-valid" },
        createdAt: "2024-01-15 10:30",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "酿酒酵母中心碳代谢模型",
        strain: "酵母菌",
        type: "基于代谢组",
        reactions: "1,876",
        metabolites: "1,423",
        flux: "8.56",
        status: { text: "已验证", className: "is-valid" },
        createdAt: "2024-01-18 14:20",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "枯草芽孢杆菌蛋白合成模型",
        strain: "芽孢杆菌",
        type: "基于转录组",
        reactions: "3,245",
        metabolites: "2,156",
        flux: "1.89",
        status: { text: "优化中", className: "is-progress" },
        createdAt: "2024-01-20 09:15",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "大肠杆菌L-赖氨酸合成模型",
        strain: "大肠杆菌",
        type: "基于基因组",
        reactions: "2,456",
        metabolites: "2,023",
        flux: "2.34",
        status: { text: "验证中", className: "is-pending" },
        createdAt: "2024-01-22 16:45",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "酵母菌类胡萝卜素合成模型",
        strain: "酵母菌",
        type: "基于代谢组",
        reactions: "1,654",
        metabolites: "1,287",
        flux: "0.78",
        status: { text: "已验证", className: "is-valid" },
        createdAt: "2024-01-25 11:00",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  process: {
    key: "process",
    title: "发酵过程分析",
    breadcrumb: ["首页", "数据管理", "发酵过程分析"],
    primaryButton: "新建发酵过程分析项目",
    headerTools: true,
    filters: [
      { label: "模型名称", type: "input", placeholder: "请输入模型名称" },
      { label: "菌株类型", type: "select", options: ["全部", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "优化目标", type: "select", options: ["全部", "产量最大化", "生成速率最大化", "底物利用最大化"] },
      { label: "状态", type: "select", options: ["全部", "已验证", "验证中", "待验证"] }
    ],
    columns: [
      { key: "name", label: "模型名称" },
      { key: "model", label: "模型类型" },
      { key: "strain", label: "菌株类型" },
      { key: "goal", label: "优化目标" },
      { key: "createdAt", label: "创建时间" },
      { key: "status", label: "状态" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "谷氨酸发酵过程优化",
        model: "代谢网络模型",
        strain: "谷氨酸棒杆菌",
        goal: "产量最大化",
        createdAt: "2024-01-15 10:30",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "LSTM发酵预测模型",
        model: "神经网络模型",
        strain: "大肠杆菌",
        goal: "生成速率最大化",
        createdAt: "2024-01-18 14:20",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "酵母菌乙醇发酵优化",
        model: "代谢网络模型",
        strain: "酵母菌",
        goal: "底物利用最大化",
        createdAt: "2024-01-20 09:15",
        status: { text: "验证中", className: "is-progress" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "芽孢杆菌蛋白酶发酵模型",
        model: "神经网络模型",
        strain: "芽孢杆菌",
        goal: "产量最大化",
        createdAt: "2024-01-22 16:45",
        status: { text: "待验证", className: "is-pending" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "大肠杆菌有机酸发酵优化",
        model: "代谢网络模型",
        strain: "大肠杆菌",
        goal: "生成速率最大化",
        createdAt: "2024-01-25 11:00",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  full: {
    key: "full",
    title: "全流程数据分析",
    breadcrumb: ["首页", "数据管理", "全流程数据分析"],
    primaryButton: "新建分析项目",
    headerTools: true,
    filters: [
      { label: "项目名称", type: "input", placeholder: "请输入项目名称" },
      { label: "菌株类型", type: "select", options: ["全部", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "分析状态", type: "select", options: ["全部", "已完成", "进行中", "待分析"] }
    ],
    columns: [
      { key: "name", label: "项目名称" },
      { key: "strain", label: "菌株类型" },
      { key: "status", label: "分析状态" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "谷氨酸全流程优化分析",
        strain: "谷氨酸棒杆菌",
        status: { text: "已完成", className: "is-done" },
        createdAt: "2024-01-15 10:30",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "赖氨酸生产菌株全流程分析",
        strain: "大肠杆菌",
        status: { text: "进行中", className: "is-progress" },
        createdAt: "2024-01-18 14:20",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "乙醇发酵全流程优化",
        strain: "酵母菌",
        status: { text: "待分析", className: "is-pending" },
        createdAt: "2024-01-20 09:15",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "芽孢杆菌蛋白酶全流程分析",
        strain: "芽孢杆菌",
        status: { text: "已完成", className: "is-done" },
        createdAt: "2024-01-22 16:45",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "有机酸生产菌株全流程优化",
        strain: "大肠杆菌",
        status: { text: "进行中", className: "is-progress" },
        createdAt: "2024-01-25 11:00",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  service: {
    key: "service",
    title: "工程细胞服务",
    breadcrumb: ["首页", "服务管理", "工程细胞服务"],
    primaryButton: "新增工程细胞",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "1,256", label: "工程细胞总数" },
      { icon: "i-doc", iconClass: "is-green", value: "3,892", label: "培养批次数量" },
      { icon: "i-file", iconClass: "is-yellow", value: "5,678", label: "检测记录数量" },
      { icon: "i-bars", iconClass: "is-cyan", value: "2,156", label: "工程应用数量" }
    ],
    filters: [
      { label: "细胞编号", type: "input", placeholder: "请输入细胞编号" },
      { label: "细胞名称", type: "input", placeholder: "请输入细胞名称" },
      { label: "菌株类型", type: "select", options: ["全部", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "状态", type: "select", options: ["全部", "已验证", "验证中", "待验证"] }
    ],
    columns: [
      { key: "code", label: "细胞编号" },
      { key: "name", label: "细胞名称" },
      { key: "strain", label: "菌株类型" },
      { key: "gene", label: "基因型" },
      { key: "status", label: "状态" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        code: "EC001",
        name: "高产L-赖氨酸工程菌",
        strain: "谷氨酸棒杆菌",
        gene: "lysC::338V, ask::P48S, hom::303V",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC002",
        name: "高效乙醇生产菌株",
        strain: "大肠杆菌",
        gene: "pdc::Δ, adh::过表达, glc::高效转运",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC003",
        name: "耐高温酵母工程菌",
        strain: "酵母菌",
        gene: "crtYB::过表达, crtI::突变, HSP::热稳定",
        status: { text: "验证中", className: "is-progress" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC004",
        name: "蛋白酶高产菌株",
        strain: "芽孢杆菌",
        gene: "aprE::强启动子, nprB::敲除抑制",
        status: { text: "待验证", className: "is-pending" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC005",
        name: "有机酸工程菌",
        strain: "大肠杆菌",
        gene: "fum::Δ, ppc::过表达, frd::强化",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  }
};

function buildLysineResultScatter() {
  const points = [];

  for (let index = 0; index < 210; index += 1) {
    const x = Math.min(220 + index * 188 + (index % 5) * 64, 39880);
    const base = 1.02 + ((index * 17) % 11) * 0.075 + (index % 6) * 0.06;
    const lift = index % 21 === 0 ? 1.55 : index % 16 === 0 ? 1.05 : 0;
    points.push({
      x,
      y: Number((base + lift).toFixed(2))
    });
  }

  [
    [420, 8.0],
    [1860, 8.2],
    [4860, 9.9],
    [5480, 8.1],
    [6120, 8.6],
    [9800, 9.6],
    [11320, 8.2],
    [12640, 8.4],
    [15240, 8.3],
    [16840, 8.1],
    [21840, 8.4],
    [23680, 8.7],
    [25400, 8.2],
    [32350, 8.1],
    [33900, 8.6],
    [36250, 8.2],
    [36980, 8.9],
    [37820, 8.8],
    [38840, 8.1]
  ].forEach(([x, y]) => {
    points.push({ x, y, highlight: true });
  });

  return {
    xMax: 40000,
    yMax: 10,
    xTicks: [0, 10000, 20000, 30000, 40000],
    yTicks: [0, 2, 4, 6, 8, 10],
    points
  };
}

function buildLysineResultHistogram() {
  const values = [
    165, 68, 184, 101, 203, 179, 98, 86, 241, 201,
    74, 67, 171, 118, 226, 248, 72, 88, 123, 143,
    228, 145, 112, 166, 191, 220, 78, 189, 171, 184,
    81, 153, 205, 126, 101, 99, 67, 204, 52, 122,
    238, 128, 202, 208, 72, 169, 224, 240, 56
  ];

  return {
    yMax: 250,
    labelStep: 3,
    bars: values.map((value, index) => ({
      label: (index * 0.02).toFixed(2),
      value
    }))
  };
}

function buildGeneResultScatterFallback(project) {
  const points = (project.points || []).map((point) => ({
    x: Math.round((point.x / 100) * 40000),
    y: Number((((point.y || 0) / 60) * 10).toFixed(2)),
    highlight: point.highlight
  }));

  return {
    xMax: 40000,
    yMax: 10,
    xTicks: [0, 10000, 20000, 30000, 40000],
    yTicks: [0, 2, 4, 6, 8, 10],
    points
  };
}

function buildGeneResultHistogramFallback(project) {
  return {
    yMax: 100,
    labelStep: 1,
    bars: (project.pValueBars || []).map((value, index) => ({
      label: `${index + 1}`,
      value
    }))
  };
}

function buildGeneResultChromosomeFallback(project) {
  const palette = ["#415ae8", "#5d72eb", "#3149d4", "#46c117", "#ffad16", "#ff4d55", "#2d8be8", "#7c36d9"];

  return {
    yMax: Math.max(...(project.chromosomeBars || []).map((item) => Number(item.value) || 0), 10),
    bars: (project.chromosomeBars || []).map((item, index) => ({
      label: String(item.label || "").toLowerCase(),
      value: Number(item.value) || 0,
      color: palette[index % palette.length]
    }))
  };
}

const geneProjectLibrary = {
  "gene-lysine": {
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
    metrics: [
      { label: "总样本数量", value: "1,256" },
      { label: "显著位点数量", value: "48" },
      { label: "高度显著数量", value: "12" },
      { label: "平均P值", value: "0.023" }
    ],
    resultScatter: buildLysineResultScatter(),
    resultHistogram: buildLysineResultHistogram(),
    resultChromosomes: {
      yMax: 12,
      bars: [
        { label: "chr01", value: 12, color: "#415ae8" },
        { label: "chr02", value: 8, color: "#5d72eb" },
        { label: "chr03", value: 6, color: "#3149d4" },
        { label: "chr04", value: 9, color: "#46c117" },
        { label: "chr05", value: 5, color: "#ffad16" },
        { label: "chr06", value: 4, color: "#ff4d55" },
        { label: "chr07", value: 2, color: "#2d8be8" },
        { label: "chr08", value: 2, color: "#7c36d9" }
      ]
    },
    resultSnps: [
      { rank: 1, chromosome: "chr01", position: "1,245,678", snpId: "rs123456789", pValue: "1.23e-8", pValueTone: "danger", effect: "0.856", gene: "lysA" },
      { rank: 2, chromosome: "chr02", position: "3,567,890", snpId: "rs987654321", pValue: "4.56e-7", pValueTone: "danger", effect: "0.723", gene: "metB" },
      { rank: 3, chromosome: "chr03", position: "5,234,567", snpId: "rs456789123", pValue: "2.34e-6", pValueTone: "warning", effect: "0.612", gene: "thrC" },
      { rank: 4, chromosome: "chr01", position: "8,901,234", snpId: "rs111222333", pValue: "5.67e-6", pValueTone: "warning", effect: "0.589", gene: "ileA" },
      { rank: 5, chromosome: "chr04", position: "2,345,678", snpId: "rs444555666", pValue: "8.90e-6", effect: "0.534", gene: "valB" }
    ],
    points: [
      { x: 6, y: 28 }, { x: 10, y: 35 }, { x: 14, y: 18 }, { x: 18, y: 54, highlight: true },
      { x: 24, y: 22 }, { x: 28, y: 31 }, { x: 33, y: 47, highlight: true }, { x: 37, y: 26 },
      { x: 42, y: 34 }, { x: 47, y: 16 }, { x: 52, y: 58, highlight: true }, { x: 57, y: 24 },
      { x: 62, y: 36 }, { x: 67, y: 20 }, { x: 72, y: 43, highlight: true }, { x: 78, y: 30 },
      { x: 84, y: 48, highlight: true }, { x: 90, y: 21 }
    ],
    pValueBars: [12, 18, 30, 44, 52, 38, 28, 18, 10],
    chromosomeBars: [
      { label: "Chr1", value: 18 },
      { label: "Chr2", value: 24 },
      { label: "Chr3", value: 12 },
      { label: "Chr4", value: 35 },
      { label: "Chr5", value: 28 },
      { label: "Chr6", value: 16 },
      { label: "Chr7", value: 22 },
      { label: "Chr8", value: 14 }
    ],
    snps: [
      { rank: 1, chromosome: "Chr4", position: "2,345,678", snpId: "rsLys0001", pValue: "2.3e-08", effect: "0.81", gene: "lysA" },
      { rank: 2, chromosome: "Chr7", position: "1,023,546", snpId: "rsLys0002", pValue: "3.1e-08", effect: "0.76", gene: "metB" },
      { rank: 3, chromosome: "Chr2", position: "845,233", snpId: "rsLys0003", pValue: "4.5e-08", effect: "0.72", gene: "thrC" },
      { rank: 4, chromosome: "Chr5", position: "3,112,890", snpId: "rsLys0004", pValue: "6.2e-08", effect: "0.68", gene: "dapA" },
      { rank: 5, chromosome: "Chr1", position: "654,782", snpId: "rsLys0005", pValue: "7.6e-08", effect: "0.64", gene: "asd" },
      { rank: 6, chromosome: "Chr8", position: "2,904,118", snpId: "rsLys0006", pValue: "9.5e-08", effect: "0.61", gene: "pyc" },
      { rank: 7, chromosome: "Chr6", position: "1,765,903", snpId: "rsLys0007", pValue: "1.2e-07", effect: "0.58", gene: "ppc" },
      { rank: 8, chromosome: "Chr3", position: "915,420", snpId: "rsLys0008", pValue: "1.4e-07", effect: "0.55", gene: "zwf" },
      { rank: 9, chromosome: "Chr5", position: "1,449,721", snpId: "rsLys0009", pValue: "1.9e-07", effect: "0.51", gene: "gdhA" },
      { rank: 10, chromosome: "Chr4", position: "3,582,116", snpId: "rsLys0010", pValue: "2.4e-07", effect: "0.49", gene: "lysC" }
    ],
    prediction: {
      combo: "lysA + metB + thrC",
      yield: "12.56 g/L",
      interval: "11.23 - 13.89 g/L",
      confidence: "92.5%"
    },
    dataset: {
      name: "L-赖氨酸表型型数据_V2",
      type: "VCF",
      size: "256.78 MB",
      sites: "2,456,789",
      uploadedAt: "2024-01-15 10:35:00",
      preview: [
        { chrom: "1", pos: "10231", id: "rs100001", ref: "A", alt: "G", qual: "98.6", filter: "PASS", info: "DP=118;AF=0.42" },
        { chrom: "1", pos: "11852", id: "rs100002", ref: "C", alt: "T", qual: "99.1", filter: "PASS", info: "DP=126;AF=0.38" },
        { chrom: "2", pos: "845233", id: "rsLys0003", ref: "G", alt: "A", qual: "97.8", filter: "PASS", info: "DP=132;AF=0.55" },
        { chrom: "4", pos: "2345678", id: "rsLys0001", ref: "T", alt: "C", qual: "99.5", filter: "PASS", info: "DP=144;AF=0.61" },
        { chrom: "7", pos: "1023546", id: "rsLys0002", ref: "A", alt: "T", qual: "98.9", filter: "PASS", info: "DP=121;AF=0.53" }
      ],
      qualityStats: [
        { value: "98.5%", label: "数据完整度" },
        { value: "Q30", label: "平均碱基质量" },
        { value: "52.3%", label: "GC含量" },
        { value: "125.6x", label: "平均测序深度" }
      ],
      qualityBars: [42, 56, 78, 94, 100, 88, 70, 48]
    }
  },
  "gene-ethanol": {
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
    metrics: [
      { label: "总样本数量", value: "892" },
      { label: "显著位点数量", value: "16" },
      { label: "高度显著数量", value: "4" },
      { label: "平均P值", value: "0.041" }
    ],
    points: [
      { x: 8, y: 20 }, { x: 14, y: 24 }, { x: 20, y: 29 }, { x: 27, y: 36 }, { x: 34, y: 44, highlight: true },
      { x: 41, y: 27 }, { x: 48, y: 31 }, { x: 56, y: 41, highlight: true }, { x: 65, y: 25 }, { x: 74, y: 38 },
      { x: 82, y: 46, highlight: true }, { x: 90, y: 28 }
    ],
    pValueBars: [10, 14, 22, 34, 40, 31, 20, 12],
    chromosomeBars: [
      { label: "Chr1", value: 12 },
      { label: "Chr2", value: 16 },
      { label: "Chr3", value: 8 },
      { label: "Chr4", value: 22 },
      { label: "Chr5", value: 11 },
      { label: "Chr6", value: 9 }
    ],
    snps: [
      { rank: 1, chromosome: "Chr4", position: "1,248,009", snpId: "rsEth0001", pValue: "1.3e-06", effect: "0.52", gene: "HSP30" },
      { rank: 2, chromosome: "Chr2", position: "542,884", snpId: "rsEth0002", pValue: "2.8e-06", effect: "0.49", gene: "PDR1" },
      { rank: 3, chromosome: "Chr6", position: "904,221", snpId: "rsEth0003", pValue: "4.7e-06", effect: "0.44", gene: "TPS1" },
      { rank: 4, chromosome: "Chr1", position: "422,019", snpId: "rsEth0004", pValue: "9.1e-06", effect: "0.41", gene: "SNF1" }
    ],
    prediction: {
      combo: "HSP30 + PDR1 + TPS1",
      yield: "8.41 h-1",
      interval: "7.82 - 8.96 h-1",
      confidence: "88.2%"
    },
    dataset: {
      name: "乙醇耐受菌株数据集_A1",
      type: "VCF",
      size: "184.32 MB",
      sites: "1,823,504",
      uploadedAt: "2024-01-18 14:35:00",
      preview: [
        { chrom: "1", pos: "22018", id: "rs200001", ref: "G", alt: "A", qual: "97.1", filter: "PASS", info: "DP=102;AF=0.31" },
        { chrom: "2", pos: "542884", id: "rsEth0002", ref: "T", alt: "C", qual: "98.0", filter: "PASS", info: "DP=136;AF=0.48" },
        { chrom: "4", pos: "1248009", id: "rsEth0001", ref: "A", alt: "G", qual: "99.0", filter: "PASS", info: "DP=128;AF=0.54" }
      ],
      qualityStats: [
        { value: "97.2%", label: "数据完整度" },
        { value: "Q28", label: "平均碱基质量" },
        { value: "49.7%", label: "GC含量" },
        { value: "108.4x", label: "平均测序深度" }
      ],
      qualityBars: [36, 50, 68, 82, 90, 76, 60, 38]
    }
  },
  "gene-bacillus": {
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
    metrics: [
      { label: "总样本数量", value: "456" },
      { label: "显著位点数量", value: "0" },
      { label: "高度显著数量", value: "0" },
      { label: "平均P值", value: "0.118" }
    ],
    points: [
      { x: 10, y: 15 }, { x: 18, y: 18 }, { x: 26, y: 12 }, { x: 34, y: 21 },
      { x: 42, y: 17 }, { x: 50, y: 19 }, { x: 58, y: 14 }, { x: 66, y: 22 },
      { x: 74, y: 16 }, { x: 82, y: 18 }
    ],
    pValueBars: [16, 22, 24, 28, 26, 20, 14, 10],
    chromosomeBars: [
      { label: "Chr1", value: 4 },
      { label: "Chr2", value: 6 },
      { label: "Chr3", value: 3 },
      { label: "Chr4", value: 5 }
    ],
    snps: [
      { rank: 1, chromosome: "Chr2", position: "884,121", snpId: "rsBac0001", pValue: "3.2e-04", effect: "0.18", gene: "aprE" },
      { rank: 2, chromosome: "Chr4", position: "1,044,228", snpId: "rsBac0002", pValue: "5.1e-04", effect: "0.16", gene: "degU" }
    ],
    prediction: {
      combo: "aprE + degU + spo0A",
      yield: "6.28 %",
      interval: "5.81 - 6.72 %",
      confidence: "71.4%"
    },
    dataset: {
      name: "蛋白酶筛选批次_B4",
      type: "CSV",
      size: "78.45 MB",
      sites: "438,226",
      uploadedAt: "2024-01-20 09:40:00",
      preview: [
        { chrom: "2", pos: "884121", id: "rsBac0001", ref: "C", alt: "A", qual: "92.6", filter: "PASS", info: "DP=89;AF=0.28" },
        { chrom: "4", pos: "1044228", id: "rsBac0002", ref: "A", alt: "G", qual: "93.1", filter: "PASS", info: "DP=94;AF=0.22" }
      ],
      qualityStats: [
        { value: "93.8%", label: "数据完整度" },
        { value: "Q25", label: "平均碱基质量" },
        { value: "44.1%", label: "GC含量" },
        { value: "86.2x", label: "平均测序深度" }
      ],
      qualityBars: [20, 34, 48, 62, 58, 42, 26, 16]
    }
  }
};

Object.assign(analysisPages.gene, {
  title: "基因型-表型分析",
  breadcrumb: ["首页", "数据管理", "基因型-表型分析"],
  primaryButton: "新增分析项目",
  headerTools: true,
  stats: [
    { icon: "i-folder", iconClass: "is-blue", value: "12", label: "分析项目总数" },
    { icon: "i-user", iconClass: "is-green", value: "3,584", label: "累计样本数量" },
    { icon: "i-bars", iconClass: "is-yellow", value: "124", label: "显著位点总数" },
    { icon: "i-chart", iconClass: "is-cyan", value: "8", label: "已完成项目" }
  ],
  filters: [
    { label: "项目名称", type: "input", placeholder: "请输入项目名称" },
    { label: "菌株类型", type: "select", options: ["全部", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
    { label: "表型类型", type: "select", options: ["全部", "产量", "生长速率", "底物利用率"] },
    { label: "分析状态", type: "select", options: ["全部", "已完成", "分析中", "失败"] }
  ],
  columns: [
    { key: "name", label: "项目名称" },
    { key: "strain", label: "菌株类型" },
    { key: "phenotype", label: "表型类型" },
    { key: "status", label: "分析状态" },
    { key: "samples", label: "样本数" },
    { key: "sites", label: "显著位点" },
    { key: "createdAt", label: "创建时间" },
    { key: "actions", label: "操作" }
  ],
  rows: [
    {
      id: "gene-lysine",
      name: "高产L-赖氨酸菌株筛选",
      strain: "大肠杆菌",
      phenotype: "产量",
      status: { text: "已完成", className: "is-done" },
      samples: "1,256",
      sites: "48",
      createdAt: "2024-01-15 10:30",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" },
        { id: "upload", label: "上传数据集", tone: "blue" },
        { id: "result", label: "分析结果", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" }
      ]
    },
    {
      id: "gene-ethanol",
      name: "乙醇耐受酵母菌株分析",
      strain: "酵母菌",
      phenotype: "生长速率",
      status: { text: "分析中", className: "is-progress" },
      samples: "892",
      sites: "-",
      createdAt: "2024-01-18 14:20",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" },
        { id: "upload", label: "上传数据集", tone: "blue" },
        { id: "result", label: "分析结果", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" }
      ]
    },
    {
      id: "gene-bacillus",
      name: "芽孢杆菌蛋白酶表达优化",
      strain: "芽孢杆菌",
      phenotype: "底物利用率",
      status: { text: "失败", className: "is-fail" },
      samples: "456",
      sites: "-",
      createdAt: "2024-01-20 09:15",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" },
        { id: "upload", label: "上传数据集", tone: "blue" },
        { id: "result", label: "分析结果", tone: "blue" },
        { id: "detail", label: "详情", tone: "blue" }
      ]
    }
  ],
  footer: "共 3 条记录，每页 10 条"
});

const defaultGeneVisuals = {
  points: [
    { x: 8, y: 22 },
    { x: 14, y: 30 },
    { x: 20, y: 18 },
    { x: 26, y: 42, highlight: true },
    { x: 32, y: 24 },
    { x: 38, y: 36 },
    { x: 44, y: 20 },
    { x: 50, y: 48, highlight: true },
    { x: 58, y: 28 },
    { x: 66, y: 33 },
    { x: 74, y: 18 },
    { x: 82, y: 40, highlight: true },
    { x: 90, y: 26 }
  ],
  pValueBars: [12, 18, 24, 38, 48, 42, 30, 18, 10],
  chromosomeBars: [
    { label: "Chr1", value: 8 },
    { label: "Chr2", value: 13 },
    { label: "Chr3", value: 10 },
    { label: "Chr4", value: 15 },
    { label: "Chr5", value: 9 },
    { label: "Chr6", value: 6 }
  ],
  preview: [
    { chrom: "1", pos: "10231", id: "rs100001", ref: "A", alt: "G", qual: "98.6", filter: "PASS", info: "DP=118;AF=0.42" },
    { chrom: "2", pos: "845233", id: "rs100002", ref: "C", alt: "T", qual: "97.4", filter: "PASS", info: "DP=121;AF=0.38" },
    { chrom: "4", pos: "2345678", id: "rs100003", ref: "G", alt: "A", qual: "99.1", filter: "PASS", info: "DP=136;AF=0.55" }
  ],
  qualityBars: [30, 44, 60, 82, 96, 86, 62, 40]
};

function toNumberValue(value) {
  const numeric = Number(String(value || "0").replaceAll(",", ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function buildGeneRow(project) {
  return {
    id: project.id,
    name: project.name,
    strain: project.strain,
    phenotype: project.phenotype,
    status: { text: project.status, className: project.status === "已完成" ? "is-done" : project.status === "分析中" ? "is-progress" : "is-fail" },
    samples: project.samples,
    sites: project.sites,
    createdAt: project.createdAt,
    actions: [
      { id: "edit", label: "编辑", tone: "blue" },
      { id: "delete", label: "删除", tone: "danger" },
      { id: "upload", label: "上传数据集", tone: "blue" },
      { id: "result", label: "分析结果", tone: "blue" },
      { id: "detail", label: "详情", tone: "blue" }
    ]
  };
}

function buildFallbackGeneProject(project) {
  const siteCount = toNumberValue(project.sites);
  const sampleCount = toNumberValue(project.samples);
  const highlightCount = siteCount > 0 ? Math.max(1, Math.min(12, Math.ceil(siteCount / 4))) : 0;

  return {
    ...project,
    metrics: [
      { label: "总样本数量", value: project.samples || "0" },
      { label: "显著位点数量", value: project.sites || "0" },
      { label: "高度显著数量", value: String(highlightCount) },
      { label: "平均P值", value: siteCount > 0 ? "0.041" : "--" }
    ],
    points: defaultGeneVisuals.points,
    pValueBars: defaultGeneVisuals.pValueBars,
    chromosomeBars: defaultGeneVisuals.chromosomeBars,
    snps:
      siteCount > 0
        ? [
            {
              rank: 1,
              chromosome: "Chr4",
              position: "2,345,678",
              snpId: `rs${project.id.slice(-4)}001`,
              pValue: "3.2e-06",
              effect: "0.42",
              gene: "candidateA"
            }
          ]
        : [],
    prediction: {
      combo: siteCount > 0 ? "candidateA + candidateB + candidateC" : "待系统分析",
      yield: sampleCount > 0 ? "待模型输出" : "--",
      interval: sampleCount > 0 ? "待模型输出" : "--",
      confidence: siteCount > 0 ? "80.0%" : "--"
    },
    dataset: {
      name: project.dataset?.name || `${project.name}_数据集`,
      type: project.dataset?.type || "VCF",
      size: project.dataset?.size || "0 MB",
      sites: project.dataset?.sites || "0",
      uploadedAt: project.dataset?.uploadedAt || "--",
      preview: defaultGeneVisuals.preview,
      qualityStats: [
        { value: sampleCount > 0 ? "96.2%" : "--", label: "数据完整度" },
        { value: sampleCount > 0 ? "Q28" : "--", label: "平均碱基质量" },
        { value: sampleCount > 0 ? "50.1%" : "--", label: "GC含量" },
        { value: sampleCount > 0 ? "102.4x" : "--", label: "平均测序深度" }
      ],
      qualityBars: defaultGeneVisuals.qualityBars
    }
  };
}

function hydrateGeneProject(project) {
  const template = geneProjectLibrary[project.id];
  const merged = template
    ? {
        ...template,
        ...project,
        metrics: template.metrics,
        points: template.points,
        pValueBars: template.pValueBars,
        chromosomeBars: template.chromosomeBars,
        snps: template.snps,
        prediction: template.prediction,
        dataset: {
          ...template.dataset,
          ...project.dataset,
          preview: template.dataset.preview,
          qualityStats: template.dataset.qualityStats,
          qualityBars: template.dataset.qualityBars
        }
      }
    : buildFallbackGeneProject(project);

  geneProjectLibrary[project.id] = merged;
  return merged;
}

function syncGeneProjects(projects) {
  const hydrated = projects.map(hydrateGeneProject);
  analysisPages.gene.rows = hydrated.map(buildGeneRow);
  analysisPages.gene.footer = `共 ${hydrated.length} 条记录，每页 10 条`;
  analysisPages.gene.stats = [
    { icon: "i-folder", iconClass: "is-blue", value: String(hydrated.length), label: "分析项目总数" },
    {
      icon: "i-user",
      iconClass: "is-green",
      value: hydrated.reduce((sum, item) => sum + toNumberValue(item.samples), 0).toLocaleString("zh-CN"),
      label: "累计样本数量"
    },
    {
      icon: "i-bars",
      iconClass: "is-yellow",
      value: hydrated.reduce((sum, item) => sum + toNumberValue(item.sites), 0).toLocaleString("zh-CN"),
      label: "显著位点总数"
    },
    {
      icon: "i-chart",
      iconClass: "is-cyan",
      value: String(hydrated.filter((item) => item.status === "已完成").length),
      label: "已完成项目"
    }
  ];
}

const persistedAnalysisModules = ["omics", "process", "full", "service"];

const analysisFormConfigs = {
  omics: {
    title: "组学数据分析",
    fields: [
      { name: "name", label: "模型名称", placeholder: "请输入模型名称" },
      { name: "strain", label: "菌株类型", type: "select", options: ["大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "type", label: "模型类型", type: "select", options: ["基于基因组", "基于代谢组", "基于转录组"] },
      { name: "reactions", label: "反应数", placeholder: "请输入反应数" },
      { name: "metabolites", label: "代谢物数", placeholder: "请输入代谢物数" },
      { name: "flux", label: "预测通量", placeholder: "请输入预测通量" },
      { name: "statusText", label: "状态", type: "select", options: ["已验证", "优化中", "验证中"] }
    ]
  },
  process: {
    title: "发酵过程分析",
    fields: [
      { name: "name", label: "模型名称", placeholder: "请输入模型名称" },
      { name: "model", label: "模型类型", type: "select", options: ["代谢网络模型", "神经网络模型"] },
      { name: "strain", label: "菌株类型", type: "select", options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "goal", label: "优化目标", type: "select", options: ["产量最大化", "生成速率最大化", "底物利用最大化"] },
      { name: "statusText", label: "状态", type: "select", options: ["已验证", "验证中", "待验证"] }
    ]
  },
  full: {
    title: "全流程数据分析",
    fields: [
      { name: "name", label: "项目名称", placeholder: "请输入项目名称" },
      { name: "strain", label: "菌株类型", type: "select", options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "statusText", label: "分析状态", type: "select", options: ["已完成", "进行中", "待分析"] }
    ]
  },
  service: {
    title: "工程细胞服务",
    fields: [
      { name: "code", label: "细胞编号", placeholder: "请输入细胞编号" },
      { name: "name", label: "细胞名称", placeholder: "请输入细胞名称" },
      { name: "strain", label: "菌株类型", type: "select", options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "gene", label: "基因型", type: "textarea", full: true, placeholder: "请输入基因型描述" },
      { name: "statusText", label: "状态", type: "select", options: ["已验证", "验证中", "待验证"] }
    ]
  }
};

const omicsModelLibrary = {
  "omics-1": {
    source: "文件导入",
    fileName: "model_v2.xml",
    type: "基于基因组",
    targetProduct: "乙酸",
    description:
      "基于大肠杆菌K-12基因组的中心代谢网络模型，包含糖酵解、TCA循环、磷酸戊糖途径等主要代谢通路。",
    pathwayNodes: [
      { label: "葡萄糖", className: "is-substrate" },
      { label: "G6P", className: "is-substrate" },
      { label: "F6P", className: "is-substrate" },
      { label: "PYR", className: "is-middle" },
      { label: "磷酸戊糖途径", className: "is-key" },
      { label: "TCA循环", className: "is-target" },
      { label: "ATP", className: "is-substrate" },
      { label: "NADH", className: "is-energy" },
      { label: "乙酰", className: "is-substrate" },
      { label: "乙酸", className: "is-target" }
    ],
    optimizationTargets: [
      { gene: "pyk", reaction: "丙酮酸激酶", action: "上调", actionClass: "is-up", gain: "+35%" },
      { gene: "pflB", reaction: "丙酮酸甲酸裂解酶", action: "下调", actionClass: "is-down", gain: "+28%" },
      { gene: "ldhA", reaction: "乳酸脱氢酶", action: "敲除", actionClass: "is-remove", gain: "+22%" }
    ],
    gpaCards: {
      networkNodes: [
        { label: "gene_01", className: "is-gene", style: "left:12%;top:20%;" },
        { label: "gene_02", className: "is-gene", style: "left:24%;top:20%;" },
        { label: "G6P", className: "is-metabolite", style: "left:18%;top:42%;" },
        { label: "M_G6P", className: "is-metabolite", style: "left:8%;top:62%;" },
        { label: "M_PYR", className: "is-metabolite", style: "left:28%;top:62%;" },
        { label: "R1", className: "is-reaction", style: "left:22%;top:76%;" },
        { label: "R2", className: "is-reaction", style: "left:34%;top:76%;" }
      ],
      panoramaBars: [
        { label: "糖酵解", width: 34, className: "is-substrate" },
        { label: "TCA循环", width: 28, className: "is-middle" },
        { label: "乙酸", width: 20, className: "is-target" },
        { label: "NADH", width: 16, className: "is-energy" },
        { label: "磷酸戊糖", width: 18, className: "is-key" }
      ],
      balanceBars: [
        { label: "糖酵解", a: 86, b: 82, c: 88 },
        { label: "TCA循环", a: 82, b: 76, c: 80 },
        { label: "氨基酸合成", a: 80, b: 75, c: 82 },
        { label: "脂肪酸代谢", a: 52, b: 48, c: 56 },
        { label: "核苷酸合成", a: 72, b: 68, c: 66 }
      ],
      energyNodes: [
        { label: "乙酰辅酶A", className: "is-gene", style: "left:18%;top:14%;" },
        { label: "琥珀酰辅酶", className: "is-energy", style: "left:38%;top:14%;" },
        { label: "FADH2", className: "is-middle", style: "left:8%;top:46%;" },
        { label: "NADPH", className: "is-key", style: "left:22%;top:46%;" },
        { label: "ATP", className: "is-target", style: "left:40%;top:46%;" },
        { label: "NADH", className: "is-gene", style: "left:22%;top:76%;" }
      ],
      forecastLine: [1, 1.2, 2, 3.8, 7.6, 11.2]
    }
  }
};

const processModelLibrary = {
  "process-1": {
    description:
      "基于全基因组代谢网络模型的谷氨酸发酵过程优化，通过调整培养参数实现产量最大化目标。",
    improvement: "+18.5%",
    paramCount: "24",
    currentYield: "85.2 g/L",
    optimizedYield: "100.9 g/L",
    confidenceRange: "98.5 - 103.3 g/L",
    processNodes: [
      { label: "葡萄糖", className: "is-substrate" },
      { label: "G6P", className: "is-substrate" },
      { label: "F6P", className: "is-middle" },
      { label: "PEP", className: "is-key" },
      { label: "丙酮酸", className: "is-target" },
      { label: "谷氨酸棒杆菌", className: "is-energy" },
      { label: "TCA循环", className: "is-process" }
    ],
    optimizationParams: [
      { name: "培养温度", current: "37℃", suggested: "35℃", impact: "高", impactClass: "is-high" },
      { name: "pH值", current: "7.0", suggested: "7.2", impact: "高", impactClass: "is-high" },
      { name: "搅拌转速", current: "500 rpm", suggested: "600 rpm", impact: "中", impactClass: "is-mid" },
      { name: "气体流量", current: "1.5 L/min", suggested: "2.0 L/min", impact: "中", impactClass: "is-mid" },
      { name: "压力", current: "1.0 kPa", suggested: "1.2 kPa", impact: "低", impactClass: "is-low" }
    ]
  },
  "process-2": {
    description:
      "结合时序发酵数据建立 LSTM 预测模型，用于动态调整控制参数并提高生成速率。",
    improvement: "+12.4%",
    paramCount: "18",
    currentYield: "68.4 g/L",
    optimizedYield: "76.9 g/L",
    confidenceRange: "74.3 - 78.2 g/L",
    processNodes: [
      { label: "糖酵解", className: "is-substrate" },
      { label: "PYR", className: "is-middle" },
      { label: "乙酰辅酶A", className: "is-key" },
      { label: "产物池", className: "is-target" },
      { label: "LSTM模型", className: "is-energy" },
      { label: "TCA循环", className: "is-process" }
    ],
    optimizationParams: [
      { name: "培养温度", current: "36℃", suggested: "34℃", impact: "高", impactClass: "is-high" },
      { name: "DO值", current: "28%", suggested: "32%", impact: "高", impactClass: "is-high" },
      { name: "补料速率", current: "1.2 mL/min", suggested: "1.6 mL/min", impact: "中", impactClass: "is-mid" }
    ]
  }
};

const fullProjectLibrary = {
  "full-1": {
    description: "整合基因型-表型分析、组学数据分析、发酵过程分析和专利风险分析，提供全流程优化方案。",
    modules: ["genotype", "omics", "process"],
    targetProduct: "L-谷氨酸",
    patentRisk: "中等风险 共12项专利风险",
    gpaSummary: {
      projectName: "谷氨酸高产菌株GPA分析",
      strain: "谷氨酸棒杆菌",
      significantSites: "23个",
      recommendedGenes: "glnA(AA)+gdh(AA)",
      improvement: "+18.5%"
    },
    processSummary: {
      modelName: "谷氨酸发酵过程优化",
      modelType: "代谢网络模型",
      strain: "谷氨酸棒杆菌",
      goal: "产量最大化",
      improvement: "+18.5%"
    },
    gpaDetail: {
      networkNodes: [
        { label: "pyc", className: "is-gene", style: "left:24%;top:32%;" },
        { label: "TCA循环", className: "is-path", style: "left:28%;top:56%;" },
        { label: "α-酮戊二酸", className: "is-metabolite", style: "left:47%;top:50%;" },
        { label: "gdh", className: "is-gene", style: "left:58%;top:64%;" },
        { label: "L-谷氨酸", className: "is-metabolite", style: "left:55%;top:30%;" },
        { label: "glnA", className: "is-gene", style: "left:64%;top:44%;" },
        { label: "产量表型", className: "is-phenotype", style: "left:73%;top:29%;" },
        { label: "氮代谢", className: "is-path", style: "left:63%;top:10%;" }
      ],
      pathwayTable: [
        { pathway: "谷氨酸合成增强回路", genes: "glnA, gdh", mode: "过表达", effect: "产量提升15-20%", confidence: "高" },
        { pathway: "氮代谢优化回路", genes: "gltA, pyc", mode: "弱化抑制", effect: "底物利用率提升12%", confidence: "高" },
        { pathway: "能量代谢平衡回路", genes: "sucA, sdhA", mode: "调控表达", effect: "生长速率提升8%", confidence: "中" }
      ],
      patents: [
        { no: "CN201810123456", title: "谷氨酸高产菌株构建方法", owner: "某生物科技公司", risk: "高风险", riskClass: "is-high", status: "有效" },
        { no: "CN201920123789", title: "基因工程菌株发酵工艺", owner: "某研究院", risk: "中风险", riskClass: "is-mid", status: "有效" },
        { no: "US20201234567", title: "Microbial strain optimization", owner: "Foreign Corp", risk: "中风险", riskClass: "is-mid", status: "审查中" }
      ]
    },
    predictDetail: {
      paramSuggestions: [
        { name: "发酵温度", current: "37℃", optimized: "35℃", gain: "+5.2%", level: 82 },
        { name: "pH值", current: "7.0", optimized: "7.2", gain: "+3.8%", level: 70 },
        { name: "搅拌转速", current: "200 rpm", optimized: "250 rpm", gain: "+2.5%", level: 58 },
        { name: "葡萄糖流加速率", current: "5 g/L/h", optimized: "6.5 g/L/h", gain: "+4.1%", level: 76 },
        { name: "氮源添加量", current: "3 g/L", optimized: "4 g/L", gain: "+2.9%", level: 62 }
      ],
      materialStats: [
        { label: "葡萄糖转化率", value: "↑12.3%", sub: "0.45→0.51 g/g" },
        { label: "氮源利用率", value: "↑8.7%", sub: "78%→85%" },
        { label: "发酵周期", value: "↓6h", sub: "48h→42h" },
        { label: "生产成本", value: "↓15%", sub: "预计节省" }
      ],
      chartPoints: {
        current: [0, 2.6, 4.6, 5.9, 6.8, 7.3, 7.6, 7.8],
        optimized: [0, 4.1, 6.2, 7.6, 8.5, 9.0, 9.2, 9.3],
        predicted: [0, 4.0, 6.1, 7.5, 8.4, 8.9, 9.1, 9.3]
      }
    }
  },
  "full-2": {
    description: "围绕赖氨酸生产菌株开展基因型、发酵和风险数据协同分析，形成分阶段优化建议。",
    modules: ["genotype", "process", "patent"],
    targetProduct: "L-赖氨酸",
    patentRisk: "中等风险 共8项专利风险"
  }
};

const serviceWizardSteps = [
  { step: 1, label: "细胞基本信息" },
  { step: 2, label: "培养与优化" },
  { step: 3, label: "分析与检测" },
  { step: 4, label: "工程化应用" }
];

const serviceCellLibrary = {
  "service-1": {
    basicInfo: {
      code: "EC001",
      name: "高产L-赖氨酸工程菌",
      strain: "谷氨酸棒杆菌",
      gene: "lysC::338V, ask::P48S, hom::303V",
      statusText: "已验证",
      description:
        "经过多轮代谢工程改造的高产L-赖氨酸工程菌株，通过过表达关键代谢通路基因和敲除竞争途径，显著提高了L-赖氨酸的产量。"
    },
    cultureInfo: {
      cultureCode: "CB001",
      cultureMode: "摇瓶培养",
      mediumFormula: "葡萄糖 80 g/L；玉米浆 20 g/L；(NH4)2SO4 25 g/L；KH2PO4 1.0 g/L；MgSO4·7H2O 0.5 g/L",
      temperature: "30",
      ph: "7.0",
      rpm: "200",
      cultureStatus: "已完成",
      optimizationRecord: "通过补料节奏调整与氨源分段添加，细胞生长稳定，L-赖氨酸积累期较初始方案提升约 18.5%。"
    },
    analysisInfo: {
      testCode: "JC001",
      testItem: "细胞活性检测",
      testMethod: "流式细胞术",
      cellActivity: "高",
      cellPurity: "高",
      testResult: "符合预期",
      testDescription:
        "检测结果显示该工程菌在稳定表达阶段保持较高细胞活性与纯度，目标代谢通路表达均衡，未发现明显退化现象。"
    },
    applicationInfo: {
      applicationCode: "YY001",
      scenarioType: "生物制造",
      applicationField: "生物制造 - 生物药物",
      applicationStatus: "已验证",
      applicationContent:
        "适用于L-赖氨酸及其衍生物规模化生物制造，可用于后续发酵放大验证、工艺包输出与产业化评估。"
    }
  },
  "service-2": {
    basicInfo: {
      code: "EC002",
      name: "高效乙醇生产菌株",
      strain: "大肠杆菌",
      gene: "pdc::over, adh::up, glc::transport",
      statusText: "已验证",
      description: "针对乙醇高效合成构建的工程细胞，优化糖代谢流分配，兼顾快速生长和目标产物积累。"
    },
    cultureInfo: {
      cultureCode: "CB002",
      cultureMode: "发酵罐培养",
      mediumFormula: "葡萄糖 60 g/L；酵母粉 15 g/L；蛋白胨 10 g/L；MgSO4 0.8 g/L；微量元素 1 mL/L",
      temperature: "32",
      ph: "6.8",
      rpm: "350",
      cultureStatus: "已完成",
      optimizationRecord: "在分批补料和微氧策略下乙醇转化率保持稳定，副产物积累显著降低。"
    },
    analysisInfo: {
      testCode: "JC002",
      testItem: "代谢产物检测",
      testMethod: "HPLC",
      cellActivity: "中",
      cellPurity: "高",
      testResult: "符合预期",
      testDescription: "发酵末期乙醇浓度和底物利用率均达到预设区间，工程改造方向有效。"
    },
    applicationInfo: {
      applicationCode: "YY002",
      scenarioType: "生物制造",
      applicationField: "生物能源 - 乙醇生产",
      applicationStatus: "已验证",
      applicationContent: "可用于高浓度乙醇生产工艺验证与中试放大，也适合后续耐受性定向进化工作。"
    }
  }
};

function createServiceDefaultSections() {
  return {
    basicInfo: {
      code: "",
      name: "",
      strain: "",
      gene: "",
      statusText: "",
      description: ""
    },
    cultureInfo: {
      cultureCode: "",
      cultureMode: "",
      mediumFormula: "",
      temperature: "",
      ph: "",
      rpm: "",
      cultureStatus: "",
      optimizationRecord: ""
    },
    analysisInfo: {
      testCode: "",
      testItem: "",
      testMethod: "",
      cellActivity: "",
      cellPurity: "",
      testResult: "",
      testDescription: ""
    },
    applicationInfo: {
      applicationCode: "",
      scenarioType: "",
      applicationField: "",
      applicationStatus: "",
      applicationContent: ""
    }
  };
}

function createServiceEmptyDraft() {
  const sections = createServiceDefaultSections();
  return {
    code: sections.basicInfo.code,
    name: sections.basicInfo.name,
    strain: sections.basicInfo.strain,
    gene: sections.basicInfo.gene,
    statusText: sections.basicInfo.statusText,
    description: sections.basicInfo.description,
    cultureCode: sections.cultureInfo.cultureCode,
    cultureMode: sections.cultureInfo.cultureMode,
    mediumFormula: sections.cultureInfo.mediumFormula,
    temperature: sections.cultureInfo.temperature,
    ph: sections.cultureInfo.ph,
    rpm: sections.cultureInfo.rpm,
    cultureStatus: sections.cultureInfo.cultureStatus,
    optimizationRecord: sections.cultureInfo.optimizationRecord,
    testCode: sections.analysisInfo.testCode,
    testItem: sections.analysisInfo.testItem,
    testMethod: sections.analysisInfo.testMethod,
    cellActivity: sections.analysisInfo.cellActivity,
    cellPurity: sections.analysisInfo.cellPurity,
    testResult: sections.analysisInfo.testResult,
    testDescription: sections.analysisInfo.testDescription,
    applicationCode: sections.applicationInfo.applicationCode,
    scenarioType: sections.applicationInfo.scenarioType,
    applicationField: sections.applicationInfo.applicationField,
    applicationStatus: sections.applicationInfo.applicationStatus,
    applicationContent: sections.applicationInfo.applicationContent
  };
}

function statusTextToClass(value) {
  const statusMap = {
    已验证: "is-valid",
    优化中: "is-progress",
    验证中: "is-pending",
    已完成: "is-done",
    进行中: "is-progress",
    待分析: "is-pending",
    待验证: "is-pending"
  };
  return statusMap[value] || "is-progress";
}

function buildFallbackOmicsItem(item) {
  return {
    ...item,
    source: item.source || "文件导入",
    fileName: item.fileName || "model.xml",
    type: item.type || "基于基因组",
    targetProduct: item.targetProduct || "乙酸",
    description: item.description || "用于代谢网络分析与优化的组学模型。",
    pathwayNodes: omicsModelLibrary["omics-1"].pathwayNodes,
    optimizationTargets: omicsModelLibrary["omics-1"].optimizationTargets,
    gpaCards: omicsModelLibrary["omics-1"].gpaCards
  };
}

function hydrateOmicsItem(item) {
  const preset = omicsModelLibrary[item.id];
  const hydrated = preset
    ? {
        ...preset,
        ...item
      }
    : buildFallbackOmicsItem(item);

  omicsModelLibrary[item.id] = {
    pathwayNodes: preset?.pathwayNodes || omicsModelLibrary["omics-1"].pathwayNodes,
    optimizationTargets: preset?.optimizationTargets || omicsModelLibrary["omics-1"].optimizationTargets,
    gpaCards: preset?.gpaCards || omicsModelLibrary["omics-1"].gpaCards,
    ...hydrated
  };

  return omicsModelLibrary[item.id];
}

function buildFallbackProcessItem(item) {
  return {
    ...item,
    description: item.description || "基于发酵过程模型进行参数优化与产量预测。",
    improvement: item.improvement || "+10.0%",
    paramCount: item.paramCount || "12",
    currentYield: item.currentYield || "80.0 g/L",
    optimizedYield: item.optimizedYield || "88.0 g/L",
    confidenceRange: item.confidenceRange || "84.0 - 90.0 g/L",
    processNodes: processModelLibrary["process-1"].processNodes,
    optimizationParams: processModelLibrary["process-1"].optimizationParams
  };
}

function hydrateProcessItem(item) {
  const preset = processModelLibrary[item.id];
  const hydrated = preset
    ? {
        ...preset,
        ...item
      }
    : buildFallbackProcessItem(item);

  processModelLibrary[item.id] = {
    processNodes: preset?.processNodes || processModelLibrary["process-1"].processNodes,
    optimizationParams: preset?.optimizationParams || processModelLibrary["process-1"].optimizationParams,
    ...hydrated
  };

  return processModelLibrary[item.id];
}

function buildFallbackFullItem(item) {
  return {
    ...item,
    description: item.description || "整合多模块分析结果，输出全流程优化建议。",
    modules: item.modules || ["genotype", "omics", "process"],
    targetProduct: item.targetProduct || "L-谷氨酸",
    patentRisk: item.patentRisk || "中等风险 共6项专利风险",
    gpaSummary: fullProjectLibrary["full-1"].gpaSummary,
    processSummary: fullProjectLibrary["full-1"].processSummary,
    gpaDetail: fullProjectLibrary["full-1"].gpaDetail,
    predictDetail: fullProjectLibrary["full-1"].predictDetail
  };
}

function hydrateFullItem(item) {
  const preset = fullProjectLibrary[item.id];
  const hydrated = preset
    ? {
        ...preset,
        ...item
      }
    : buildFallbackFullItem(item);

  fullProjectLibrary[item.id] = {
    gpaSummary: preset?.gpaSummary || fullProjectLibrary["full-1"].gpaSummary,
    processSummary: preset?.processSummary || fullProjectLibrary["full-1"].processSummary,
    gpaDetail: preset?.gpaDetail || fullProjectLibrary["full-1"].gpaDetail,
    predictDetail: preset?.predictDetail || fullProjectLibrary["full-1"].predictDetail,
    ...hydrated
  };

  return fullProjectLibrary[item.id];
}

function buildFallbackServiceItem(item) {
  const defaults = createServiceDefaultSections();
  const basicInfo = {
    ...defaults.basicInfo,
    ...(item.basicInfo || {}),
    code: item.code || item.basicInfo?.code || defaults.basicInfo.code,
    name: item.name || item.basicInfo?.name || defaults.basicInfo.name,
    strain: item.strain || item.basicInfo?.strain || defaults.basicInfo.strain,
    gene: item.gene || item.basicInfo?.gene || defaults.basicInfo.gene,
    statusText: item.status?.text || item.statusText || item.basicInfo?.statusText || defaults.basicInfo.statusText,
    description: item.description || item.basicInfo?.description || defaults.basicInfo.description
  };
  const cultureInfo = {
    ...defaults.cultureInfo,
    ...(item.cultureInfo || {})
  };
  const analysisInfo = {
    ...defaults.analysisInfo,
    ...(item.analysisInfo || {})
  };
  const applicationInfo = {
    ...defaults.applicationInfo,
    ...(item.applicationInfo || {})
  };
  const statusText = item.status?.text || item.statusText || basicInfo.statusText || "已验证";

  return {
    ...item,
    code: basicInfo.code,
    name: basicInfo.name,
    strain: basicInfo.strain,
    gene: basicInfo.gene,
    description: basicInfo.description,
    basicInfo,
    cultureInfo,
    analysisInfo,
    applicationInfo,
    statusText,
    status: item.status?.text
      ? item.status
      : {
          text: statusText,
          className: statusTextToClass(statusText)
        }
  };
}

function hydrateServiceItem(item) {
  const preset = serviceCellLibrary[item.id];
  const hydrated = preset
    ? buildFallbackServiceItem({
        ...preset,
        ...item,
        basicInfo: {
          ...(preset.basicInfo || {}),
          ...(item.basicInfo || {})
        },
        cultureInfo: {
          ...(preset.cultureInfo || {}),
          ...(item.cultureInfo || {})
        },
        analysisInfo: {
          ...(preset.analysisInfo || {}),
          ...(item.analysisInfo || {})
        },
        applicationInfo: {
          ...(preset.applicationInfo || {}),
          ...(item.applicationInfo || {})
        }
      })
    : buildFallbackServiceItem(item);

  if (item.id) {
    serviceCellLibrary[item.id] = hydrated;
  }

  return hydrated;
}

function buildServiceDraft(item = null) {
  const current = item ? hydrateServiceItem(item) : buildFallbackServiceItem({});
  return {
    ...createServiceEmptyDraft(),
    code: current.basicInfo.code,
    name: current.basicInfo.name,
    strain: current.basicInfo.strain,
    gene: current.basicInfo.gene,
    statusText: current.basicInfo.statusText,
    description: current.basicInfo.description,
    cultureCode: current.cultureInfo.cultureCode,
    cultureMode: current.cultureInfo.cultureMode,
    mediumFormula: current.cultureInfo.mediumFormula,
    temperature: current.cultureInfo.temperature,
    ph: current.cultureInfo.ph,
    rpm: current.cultureInfo.rpm,
    cultureStatus: current.cultureInfo.cultureStatus,
    optimizationRecord: current.cultureInfo.optimizationRecord,
    testCode: current.analysisInfo.testCode,
    testItem: current.analysisInfo.testItem,
    testMethod: current.analysisInfo.testMethod,
    cellActivity: current.analysisInfo.cellActivity,
    cellPurity: current.analysisInfo.cellPurity,
    testResult: current.analysisInfo.testResult,
    testDescription: current.analysisInfo.testDescription,
    applicationCode: current.applicationInfo.applicationCode,
    scenarioType: current.applicationInfo.scenarioType,
    applicationField: current.applicationInfo.applicationField,
    applicationStatus: current.applicationInfo.applicationStatus,
    applicationContent: current.applicationInfo.applicationContent
  };
}

function syncServiceDraftFromDom() {
  if (state.modal?.type !== "analysis-form" || state.modal.moduleKey !== "service") {
    return createServiceEmptyDraft();
  }

  const values = [...document.querySelectorAll("[data-service-field]")].reduce((result, node) => {
    result[node.dataset.serviceField] = node.value.trim();
    return result;
  }, {});

  const nextDraft = {
    ...createServiceEmptyDraft(),
    ...(state.modal.serviceDraft || {}),
    ...values
  };

  state.modal = {
    ...state.modal,
    serviceDraft: nextDraft
  };

  return nextDraft;
}

function buildServicePayload(values, current = null) {
  const draft = {
    ...createServiceEmptyDraft(),
    ...(current ? buildServiceDraft(current) : {}),
    ...values
  };
  const statusText = draft.statusText || current?.status?.text || "已验证";

  return {
    ...(current || {}),
    code: draft.code,
    name: draft.name,
    strain: draft.strain,
    gene: draft.gene,
    description: draft.description,
    basicInfo: {
      code: draft.code,
      name: draft.name,
      strain: draft.strain,
      gene: draft.gene,
      statusText,
      description: draft.description
    },
    cultureInfo: {
      cultureCode: draft.cultureCode,
      cultureMode: draft.cultureMode,
      mediumFormula: draft.mediumFormula,
      temperature: draft.temperature,
      ph: draft.ph,
      rpm: draft.rpm,
      cultureStatus: draft.cultureStatus,
      optimizationRecord: draft.optimizationRecord
    },
    analysisInfo: {
      testCode: draft.testCode,
      testItem: draft.testItem,
      testMethod: draft.testMethod,
      cellActivity: draft.cellActivity,
      cellPurity: draft.cellPurity,
      testResult: draft.testResult,
      testDescription: draft.testDescription
    },
    applicationInfo: {
      applicationCode: draft.applicationCode,
      scenarioType: draft.scenarioType,
      applicationField: draft.applicationField,
      applicationStatus: draft.applicationStatus,
      applicationContent: draft.applicationContent
    },
    statusText,
    statusClass: statusTextToClass(statusText)
  };
}

function normalizeAnalysisRow(moduleKey, item) {
  const sourceItem =
    moduleKey === "omics"
      ? hydrateOmicsItem(item)
      : moduleKey === "process"
        ? hydrateProcessItem(item)
        : moduleKey === "full"
          ? hydrateFullItem(item)
          : moduleKey === "service"
            ? hydrateServiceItem(item)
            : item;
  const config = analysisFormConfigs[moduleKey];
  return {
    ...sourceItem,
    id: sourceItem.id,
    status: sourceItem.status?.text
      ? sourceItem.status
      : {
          text: sourceItem.statusText || "进行中",
          className: statusTextToClass(sourceItem.statusText || "进行中")
        },
    actions:
      sourceItem.actions ||
      (moduleKey === "service"
        ? [
            { id: "edit", label: "编辑", tone: "blue" },
            { id: "detail", label: "详情", tone: "blue" },
            { id: "delete", label: "删除", tone: "danger" }
          ]
        : [
            { id: "edit", label: "编辑", tone: "blue" },
            { id: "detail", label: config.title === "组学数据分析" ? "详情" : "查看详情", tone: "blue" },
            { id: "delete", label: "删除", tone: "danger" }
          ])
  };
}

function syncAnalysisModule(moduleKey, items) {
  const rows = (items || []).map((item) => normalizeAnalysisRow(moduleKey, item));
  analysisPages[moduleKey].rows = rows;
  analysisPages[moduleKey].footer = `共 ${rows.length} 条记录，每页 10 条`;
}

async function loadAnalysisModules() {
  const results = await Promise.all(
    persistedAnalysisModules.map((moduleKey) => apiRequest(`/api/analysis-items?module=${moduleKey}`))
  );

  results.forEach((payload, index) => {
    syncAnalysisModule(persistedAnalysisModules[index], payload.items || []);
  });
}

function mergeSensorRecord(moduleKey, record) {
  const module = sensorModules[moduleKey];
  let batch = module.batches.find((item) => item.id === record.batchId);
  if (!batch) {
    batch = {
      id: record.batchId,
      badge: "新增",
      badgeClass: "badge-other",
      statusText: "运行中",
      tone: "running",
      period: "系统新增批次",
      records: []
    };
    module.batches.unshift(batch);
  }

  if (!batch.records.find((item) => item.id === record.id)) {
    batch.records.unshift(record);
  }
}

function recalcSensorSummary(moduleKey) {
  const records = sensorModules[moduleKey].batches.flatMap((batch) => batch.records);
  sensorModules[moduleKey].summary = [
    { value: String(records.length), label: "总记录数", tone: "blue" },
    { value: String(records.filter((item) => item.statusClass === "is-normal").length), label: "正常数", tone: "green" },
    { value: String(records.filter((item) => item.statusClass === "is-warning").length), label: "预警数", tone: "orange" },
    { value: String(records.filter((item) => item.statusClass === "is-error").length), label: "异常数", tone: "red" }
  ];
}

async function loadSensorRecords() {
  const results = await Promise.all([
    apiRequest("/api/sensor-records?module=physical"),
    apiRequest("/api/sensor-records?module=biological")
  ]);

  ["physical", "biological"].forEach((moduleKey, index) => {
    (results[index].items || []).forEach((record) => {
      mergeSensorRecord(moduleKey, record);
    });
    recalcSensorSummary(moduleKey);
  });
}

async function loadSensorThresholds() {
  const results = await Promise.all([
    apiRequest("/api/sensor-thresholds?module=physical"),
    apiRequest("/api/sensor-thresholds?module=biological")
  ]);

  ["physical", "biological"].forEach((moduleKey, index) => {
    if (results[index].config) {
      state.thresholds[moduleKey] = results[index].config;
    }
  });
}

const state = {
  scene: "auth",
  authView: "login",
  authUser: null,
  activeMenu: "physical",
  sensorView: {
    physical: "list",
    biological: "list"
  },
  thresholds: {
    physical: null,
    biological: null
  },
  activeBatch: {
    physical: sensorModules.physical.batches[0].id,
    biological: sensorModules.biological.batches[0].id
  },
  statusFilter: {
    physical: "all",
    biological: "all"
  },
  pagination: {
    physical: 1,
    biological: 1,
    gene: 1,
    omics: 1,
    process: 1,
    full: 1,
    service: 1
  },
  openNavGroup: "monitor",
  modal: null,
  sidebarOpen: false,
  captchaCodes: {
    login: "",
    register: "",
    recover: ""
  }
};

async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || "请求失败");
  }

  return payload;
}

function formatFileSize(bytes) {
  const size = Number(bytes) || 0;
  if (size < 1024) {
    return `${size} B`;
  }
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }
  if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("文件读取失败"));
    reader.readAsDataURL(file);
  });
}

async function loadGeneProjects() {
  const payload = await apiRequest("/api/gene-projects");
  syncGeneProjects(payload.items || []);
}

const appShell = document.querySelector(".app-shell");
const viewRoot = document.querySelector("#viewRoot");
const sidebarRoot = document.querySelector("#sidebar");
const toast = document.querySelector("#toast");
const mobileMenuButton = document.querySelector("#mobileMenuButton");
const sidebarBackdrop = document.querySelector("#sidebarBackdrop");
const mobileViewTitle = document.querySelector("#mobileViewTitle");
let toastTimer = null;

function icon(name) {
  return `
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="1em" height="1em">
      <use href="#${name}" xlink:href="#${name}"></use>
    </svg>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 1200px)").matches;
}

function isSensorMenu(menuKey = state.activeMenu) {
  return menuKey === "physical" || menuKey === "biological";
}

function currentSensorModule() {
  return sensorModules[state.activeMenu];
}

function currentPageTitle() {
  if (state.scene === "auth") {
    return authScreens[state.authView].title;
  }

  if (isSensorMenu()) {
    const module = currentSensorModule();
    return state.sensorView[state.activeMenu] === "form"
      ? module.formBreadcrumb[module.formBreadcrumb.length - 1]
      : module.label;
  }

  return analysisPages[state.activeMenu].title;
}

function syncShellState() {
  const shouldOpen = state.scene === "dashboard" && state.sidebarOpen && isMobileViewport();
  appShell.classList.toggle("is-auth-mode", state.scene !== "dashboard");
  appShell.classList.toggle("is-sidebar-open", shouldOpen);
  document.body.classList.toggle("sidebar-open", shouldOpen);
  mobileViewTitle.textContent = currentPageTitle();
}

function setSidebarOpen(open) {
  state.sidebarOpen = state.scene === "dashboard" && isMobileViewport() ? open : false;
  syncShellState();
}

function renderSidebar() {
  if (state.scene !== "dashboard") {
    sidebarRoot.innerHTML = "";
    return;
  }

  const monitorActive = ["physical", "biological"].includes(state.activeMenu);
  const monitorOpen = state.openNavGroup === "monitor";

  sidebarRoot.innerHTML = `
    <div class="sidebar-brand">
      <span class="brand-icon">${icon("i-logo")}</span>
      <p class="brand-text">工程细胞主题库</p>
    </div>

    <div class="sidebar-nav">
      <section class="nav-section">
        <p class="nav-title">数据管理</p>
        <button class="nav-group-head ${monitorActive || monitorOpen ? "is-active" : ""}" type="button" data-menu-group="monitor">
          <span class="group-label">
            <span class="nav-icon">${icon("i-clock")}</span>
            <span>发酵过程数据监测工具</span>
          </span>
          <span class="menu-arrow ${monitorOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${monitorOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "physical" ? "is-active" : ""}" type="button" data-menu="physical">
            <span class="submenu-dot"></span>
            <span>物理传感器</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "biological" ? "is-active" : ""}" type="button" data-menu="biological">
            <span class="submenu-dot"></span>
            <span>生物传感器</span>
          </button>
        </div>
        <button class="nav-link ${state.activeMenu === "gene" ? "is-active" : ""}" type="button" data-menu="gene">
          <span class="nav-icon">${icon("i-bars")}</span>
          <span>基因型-表型分析</span>
        </button>
        <button class="nav-link ${state.activeMenu === "omics" ? "is-active" : ""}" type="button" data-menu="omics">
          <span class="nav-icon">${icon("i-doc")}</span>
          <span>组学数据分析</span>
        </button>
        <button class="nav-link ${state.activeMenu === "process" ? "is-active" : ""}" type="button" data-menu="process">
          <span class="nav-icon">${icon("i-chart")}</span>
          <span>发酵过程分析</span>
        </button>
        <button class="nav-link ${state.activeMenu === "full" ? "is-active" : ""}" type="button" data-menu="full">
          <span class="nav-icon">${icon("i-table")}</span>
          <span>全流程数据分析</span>
        </button>
      </section>

      <section class="nav-section">
        <p class="nav-title">服务管理</p>
        <button class="nav-link ${state.activeMenu === "service" ? "is-active" : ""}" type="button" data-menu="service">
          <span class="nav-icon">${icon("i-heart")}</span>
          <span>工程细胞服务</span>
        </button>
      </section>
    </div>

    <div class="sidebar-footer">© 2025 工程细胞研究中心. 保留所有权利.</div>
  `;
}

function renderAuthView(viewKey) {
  const screen = authScreens[viewKey];
  const registerCode = state.captchaCodes.register;

  const loginForm = `
    <form class="auth-form" id="loginForm">
      <div class="field-block">
        <label for="loginAccount">用户名/邮箱</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-user")}</span>
          <input class="input-control" id="loginAccount" name="account" type="text" placeholder="请输入用户名或邮箱" />
        </div>
      </div>
      <div class="field-block">
        <label for="loginPassword">密码</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-lock")}</span>
          <input class="input-control" id="loginPassword" name="password" type="password" placeholder="请输入密码" />
          <button class="password-toggle" type="button" data-toggle-password="loginPassword">
            <span class="header-icon">${icon("i-eye-off")}</span>
          </button>
        </div>
      </div>
      <div class="field-block">
        <label for="loginCaptcha">验证码</label>
        <div class="field-row">
          <div class="input-wrap">
            <span class="input-icon">${icon("i-image")}</span>
            <input class="input-control" id="loginCaptcha" name="captcha" type="text" placeholder="请输入验证码" />
          </div>
          <button class="captcha-box" type="button" data-refresh-captcha="login">
            <span class="captcha-text" data-captcha-value="login">${escapeHtml(state.captchaCodes.login)}</span>
          </button>
        </div>
      </div>
      <div class="checkbox-row">
        <label class="checkbox">
          <input type="checkbox" name="remember" />
          <span class="checkbox-mark">${icon("i-check")}</span>
          <span>记住密码</span>
        </label>
        <button class="text-link" type="button" data-auth-view="recover">忘记密码?</button>
      </div>
      <div class="form-submit">
        <button class="primary-button" type="submit">登录</button>
      </div>
      <div class="form-footnote">
        还没有账号? <button class="text-link" type="button" data-auth-view="register">立即注册</button>
      </div>
    </form>
  `;

  const registerForm = `
    <form class="auth-form" id="registerForm">
      <div class="field-block">
        <label class="field-required" for="registerUser">用户名</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-user")}</span>
          <input class="input-control" id="registerUser" name="username" type="text" placeholder="请设置您的用户名" />
        </div>
        <p class="field-hint">用户名长度为4-20个字符，支持字母、数字和下划线</p>
      </div>
      <div class="field-block">
        <label class="field-required" for="registerOrg">所属机构</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-building")}</span>
          <input class="input-control" id="registerOrg" name="organization" type="text" placeholder="请输入您所属的科研机构/高校/企业" />
        </div>
      </div>
      <div class="field-block">
        <label class="field-required" for="registerPassword">设置密码</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-lock")}</span>
          <input class="input-control" id="registerPassword" name="password" type="password" placeholder="请设置8-20位登录密码" data-strength-input="register" />
          <button class="password-toggle" type="button" data-toggle-password="registerPassword">
            <span class="header-icon">${icon("i-eye-off")}</span>
          </button>
        </div>
        <div class="strength-meter" id="strengthMeter">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="strength-text" id="strengthText">S: 密码需包含字母、数字和特殊字符</p>
      </div>
      <div class="field-block">
        <label class="field-required" for="registerConfirm">确认密码</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-lock")}</span>
          <input class="input-control" id="registerConfirm" name="confirmPassword" type="password" placeholder="请再次输入密码" />
        </div>
      </div>
      <div class="field-block">
        <label class="field-required" for="registerCaptcha">图片验证码</label>
        <div class="field-row">
          <div class="input-wrap">
            <span class="input-icon">${icon("i-image")}</span>
            <input class="input-control" id="registerCaptcha" name="captcha" type="text" placeholder="请输入图片验证码" />
          </div>
          <button class="captcha-box" type="button" data-refresh-captcha="register">
            <span class="captcha-text" data-captcha-value="register">${escapeHtml(registerCode)}</span>
          </button>
        </div>
      </div>
      <div class="agreement">
        <label class="checkbox">
          <input type="checkbox" name="agreement" />
          <span class="checkbox-mark">${icon("i-check")}</span>
          <span>我已阅读并同意《用户服务协议》和《隐私政策》</span>
        </label>
      </div>
      <div class="form-submit">
        <button class="secondary-button" type="submit">注册</button>
      </div>
      <div class="form-footnote">
        已有账号? <button class="text-link" type="button" data-auth-view="login">返回登录</button>
      </div>
    </form>
  `;

  const recoverCard = `
    <div class="auth-card">
      <button class="back-link" type="button" data-auth-view="login">
        <span class="header-icon">${icon("i-arrow-left")}</span>
        <span>返回登录</span>
      </button>
      <h2 class="auth-title">${screen.title}</h2>
      <p class="auth-subtitle">${screen.subtitle}</p>
      <form class="auth-form" id="recoverForm">
        <div class="field-block">
          <label for="recoverAccount">用户名</label>
          <div class="input-wrap">
            <span class="input-icon">${icon("i-user")}</span>
            <input class="input-control" id="recoverAccount" name="account" type="text" placeholder="请输入您的用户名" />
          </div>
        </div>
        <div class="field-block">
          <label for="recoverCaptcha">图片验证码</label>
          <div class="field-row">
            <div class="input-wrap">
              <span class="input-icon">${icon("i-image")}</span>
              <input class="input-control" id="recoverCaptcha" name="captcha" type="text" placeholder="请输入验证码" />
            </div>
            <button class="captcha-box" type="button" data-refresh-captcha="recover">
              <span class="captcha-text" data-captcha-value="recover">${escapeHtml(state.captchaCodes.recover)}</span>
            </button>
          </div>
        </div>
        <div class="field-block">
          <label for="recoverPassword">新密码</label>
          <div class="input-wrap">
            <span class="input-icon">${icon("i-lock")}</span>
            <input class="input-control" id="recoverPassword" name="password" type="password" placeholder="请输入8-20位新密码" />
          </div>
        </div>
        <div class="field-block">
          <label for="recoverConfirm">确认密码</label>
          <div class="input-wrap">
            <span class="input-icon">${icon("i-lock")}</span>
            <input class="input-control" id="recoverConfirm" name="confirmPassword" type="password" placeholder="请再次输入新密码" />
          </div>
        </div>
        <div class="form-submit">
          <button class="primary-button" type="submit">重置密码</button>
        </div>
      </form>
      <div class="help-card">
        <div class="help-title">
          <span class="header-icon">${icon("i-info")}</span>
          <span>遇到问题?</span>
        </div>
        <p>如果您无法重置密码，请联系系统管理员获取帮助。</p>
      </div>
    </div>
  `;

  return `
    <section class="auth-shell auth-shell--${viewKey}">
      <div class="auth-hero">
        <div class="auth-brand">
          <div class="auth-brand-mark">${icon("i-logo")}</div>
          <div>
            <p class="auth-brand-title">工程细胞主题库</p>
            <p class="auth-brand-subtitle">Engineering Cell Theme Library</p>
          </div>
        </div>
        <div class="auth-copy">
          <h1>${screen.heroTitle.join("<br />")}</h1>
          <ul class="auth-points">
            ${screen.bullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="auth-copyright">© 2025 工程细胞研究中心. 保留所有权利.</div>
      </div>
      <div class="auth-panel">
        ${
          viewKey === "recover"
            ? recoverCard
            : `
              <div class="auth-card">
                <h2 class="auth-title">${screen.title}</h2>
                <p class="auth-subtitle">${screen.subtitle}</p>
                ${viewKey === "login" ? loginForm : registerForm}
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderBreadcrumb(items) {
  return `
    <div class="breadcrumb">
      ${items
        .map((item, index) =>
          index === items.length - 1
            ? `<strong>${escapeHtml(item)}</strong>`
            : `<span>${escapeHtml(item)}</span>`
        )
        .join("<span>›</span>")}
    </div>
  `;
}

function renderHeader(page) {
  const headerTools = page.headerTools
    ? `
        <button class="header-tool" type="button" data-header-tool="search">${icon("i-search")}</button>
        <button class="header-tool" type="button" data-header-tool="filter">${icon("i-filter")}</button>
        <button class="header-tool" type="button" data-header-tool="settings">${icon("i-settings")}</button>
      `
    : "";

  return `
    <header class="app-header">
      ${renderBreadcrumb(page.breadcrumb)}
      <div class="header-actions">
        ${headerTools}
        <div class="header-user-panel">
          <div class="header-user-card" aria-label="当前登录用户">
            <span class="header-user-avatar">${icon("i-user")}</span>
            <div class="header-user-meta">
              <strong>${escapeHtml(state.authUser?.name || "系统用户")}</strong>
              <span>在线</span>
            </div>
          </div>
          <button class="header-logout-button" type="button" data-auth-action="logout">
            <span class="header-icon">${icon("i-arrow-left")}</span>
            <span>退出系统</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderSummaryCards(cards) {
  return cards
    .map(
      (item) => `
        <article class="summary-card">
          <div>
            <p class="summary-value tone-${item.tone}">${item.value}</p>
            <div class="summary-label">${item.label}</div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderEmptyState(title, description) {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">${icon("i-folder")}</div>
      <h4 class="empty-state-title">${escapeHtml(title)}</h4>
      <p class="empty-state-desc">${escapeHtml(description)}</p>
    </div>
  `;
}

function renderSensorRecord(moduleKey, batch, record) {
  return `
    <article class="record-row">
      <div class="record-main">
        <p class="record-time">${record.time}</p>
        <div class="record-grid">
          ${record.metrics
            .map(
              (metric) => `
                <div>
                  <p class="metric-title">${metric.label}</p>
                  <p class="metric-value-text ${metric.tone === "warning" ? "is-warning" : ""} ${
                    metric.tone === "error" ? "is-error" : ""
                  }">${metric.value}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <p class="record-user">录入人: ${record.user}</p>
      </div>
      <div class="record-side">
        <span class="record-badge ${record.statusClass}">${record.statusText}</span>
        <button
          class="tag-button"
          type="button"
          data-open-modal="detail|${moduleKey}|${batch.id}|${record.id}"
        >
          查看详情
        </button>
      </div>
    </article>
  `;
}

function renderPagination(key, pageCount) {
  const current = state.pagination[key];
  return `
    <div class="pagination">
      <button class="page-button" type="button" data-page="${key}|${Math.max(1, current - 1)}">‹</button>
      ${Array.from({ length: pageCount }, (_, index) => index + 1)
        .map(
          (page) => `
            <button class="page-button ${page === current ? "is-active" : ""}" type="button" data-page="${key}|${page}">
              ${page}
            </button>
          `
        )
        .join("")}
      <button class="page-button" type="button" data-page="${key}|${Math.min(pageCount, current + 1)}">›</button>
    </div>
  `;
}

function renderSensorListPage(module) {
  const batch = module.batches.find((item) => item.id === state.activeBatch[module.key]) || module.batches[0];
  const statusFilter = state.statusFilter[module.key];
  const filteredRecords = batch.records.filter((item) => (statusFilter === "all" ? true : item.statusClass === statusFilter));
  const pageSize = 3;
  const pageCount = Math.max(3, Math.ceil(filteredRecords.length / pageSize) || 1);
  const current = Math.min(state.pagination[module.key], pageCount);
  state.pagination[module.key] = current;
  const pageRecords = filteredRecords.slice((current - 1) * pageSize, (current - 1) * pageSize + pageSize);

  return `
    <div class="page-section sensor-page">
      <div class="sensor-layout">
        <aside class="batch-panel">
          <div class="panel-head">
            <span class="header-icon">${icon(module.batchIcon)}</span>
            <span>${module.batchTitle}</span>
          </div>
          <div class="batch-list">
            ${module.batches
              .map(
                (item) => `
                  <button
                    class="batch-card ${item.id === batch.id ? "is-active" : ""}"
                    type="button"
                    data-batch="${module.key}|${item.id}"
                  >
                    <div class="batch-top">
                      <span class="batch-id">${item.id}</span>
                      <span class="batch-badge ${item.badgeClass}">${item.badge}</span>
                    </div>
                    <div class="batch-status tone-${item.tone}">
                      <span class="status-dot"></span>
                      <span>${item.statusText}</span>
                    </div>
                  </button>
                `
              )
              .join("")}
          </div>
        </aside>

        <section class="sensor-main">
          <div class="summary-strip">
            ${renderSummaryCards(module.summary)}
            <div class="action-cluster">
              <button class="outline-button" type="button" data-open-modal="import|${module.key}">批量导入</button>
              <button class="outline-button" type="button" data-open-modal="threshold|${module.key}">阈值配置</button>
              <button class="outline-button is-primary" type="button" data-open-form="${module.key}">新增录入</button>
            </div>
          </div>

          <section class="records-panel">
            <div class="records-head">
              <h3 class="records-title">${module.recordTitle}</h3>
              <select class="record-filter" data-status-filter="${module.key}">
                <option value="all" ${statusFilter === "all" ? "selected" : ""}>全部状态</option>
                <option value="is-normal" ${statusFilter === "is-normal" ? "selected" : ""}>正常</option>
                <option value="is-warning" ${statusFilter === "is-warning" ? "selected" : ""}>预警</option>
                <option value="is-error" ${statusFilter === "is-error" ? "selected" : ""}>异常</option>
              </select>
            </div>
            <div class="records-list">
              ${
                pageRecords.length
                  ? pageRecords.map((record) => renderSensorRecord(module.key, batch, record)).join("")
                  : renderEmptyState("暂无记录", "当前筛选条件下没有可展示的监测记录")
              }
            </div>
            <div class="records-footer">
              <span class="records-count">共 ${filteredRecords.length} 条记录</span>
              ${renderPagination(module.key, pageCount)}
            </div>
          </section>
        </section>
      </div>
    </div>
  `;
}

function renderFormField(field) {
  const sensorAttr =
    field.name && field.moduleKey
      ? `data-sensor-module="${field.moduleKey}" data-sensor-field="${field.name}"`
      : "";
  let control = "";

  if (field.type === "select") {
    const placeholder = field.placeholder || "请选择";
    const options = field.options || [field.value || placeholder];
    const hasDynamicOptions = field.dynamicOptions === "batches" && options[0] !== placeholder;
    control = `
      <div class="input-wrap">
        <select class="select-control" ${sensorAttr}>
          <option value="" disabled selected>${placeholder}</option>
          ${options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
        </select>
      </div>
    `;
  } else if (field.type === "datetime-local") {
    const defaultValue = field.value || "";
    const placeholder = field.placeholder || "";
    control = `
      <div class="input-wrap datetime-wrap${placeholder && !defaultValue ? " has-placeholder" : ""}" data-placeholder="${placeholder}">
        <input class="input-control datetime-local" type="datetime-local" ${sensorAttr} value="${defaultValue}" placeholder="${placeholder}" />
      </div>
    `;
  } else if (field.type === "datetime") {
    const defaultValue = field.value || "";
    const placeholder = field.placeholder || "";
    control = `
      <div class="input-wrap datetime-wrap${placeholder && !defaultValue ? " has-placeholder" : ""}" data-placeholder="${placeholder}">
        <input class="input-control datetime-local" type="datetime-local" ${sensorAttr} value="${defaultValue}" placeholder="${placeholder}" />
      </div>
    `;
  } else {
    control = `
      <div class="input-wrap">
        <input class="input-control" type="text" ${sensorAttr} value="${field.value || ""}" placeholder="${field.placeholder || ""}" />
      </div>
    `;
  }

  return `
    <div class="form-field">
      <label>${field.label}</label>
      ${control}
      ${field.hint ? `<div class="threshold-hint"><span class="header-icon">${icon("i-warning")}</span><span>${field.hint}</span></div>` : ""}
    </div>
  `;
}

function renderSensorFormPage(module) {
  // 基础字段处理
  const basicFields = module.basicFields.map((field, index) => {
    let processedField = { ...field, moduleKey: module.key, name: `${module.key}-basic-${index}` };
    // 动态生成批次选项
    if (field.dynamicOptions === "batches") {
      processedField.type = "select";
      const batchOptions = module.batches.map(b => `${b.id}(${b.badge})`);
      processedField.options = batchOptions.length ? batchOptions : ["暂无批次"];
    }
    return processedField;
  });

  const paramFields = module.paramFields.map((field, index) => ({
    ...field,
    moduleKey: module.key,
    name: `${module.key}-param-${index}`
  }));

  return `
    <div class="page-section entry-page">
      <section class="entry-card">
        <h2 class="entry-title">
          <span class="header-icon">${icon(module.entryTitleIcon)}</span>
          <span>${module.entryTitle}</span>
        </h2>

        <div class="entry-section entry-section-card">
          <h3 class="section-title">
            <span class="section-dot"></span>
            <span>${module.formSectionTitle}</span>
          </h3>
          <div class="form-grid is-3">
            ${basicFields.map(renderFormField).join("")}
          </div>
        </div>

        <div class="entry-section entry-section-card">
          <h3 class="section-title">
            <span class="section-square"></span>
            <span>${module.formMetricTitle}</span>
          </h3>
          <div class="form-grid ${module.key === "physical" ? "is-3" : "is-4"}">
            ${paramFields.map(field => renderFormFieldWithQuickSelect(field)).join("")}
          </div>
        </div>

        <div class="entry-actions">
          <button class="outline-button" type="button" data-form-action="reset|${module.key}">重置</button>
          <div class="entry-actions-right">
            <button class="return-link" type="button" data-back-list="${module.key}">
              <span class="header-icon">${icon("i-arrow-left")}</span>
              <span>返回列表</span>
            </button>
            <button class="outline-button" type="button" data-form-action="save|${module.key}">暂存</button>
            <button class="outline-button is-primary" type="button" data-form-action="submit|${module.key}">提交</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderFormFieldWithQuickSelect(field) {
  const sensorAttr =
    field.name && field.moduleKey
      ? `data-sensor-module="${field.moduleKey}" data-sensor-field="${field.name}"`
      : "";

  const inputType = field.type === "number" ? "number" : "text";
  const stepAttr = field.step ? `step="${field.step}"` : "";

  const control = `
    <div class="input-wrap">
      <input class="input-control" type="${inputType}" ${stepAttr} ${sensorAttr} value="${field.value || ""}" placeholder="${field.placeholder || ""}" />
    </div>
  `;

  return `
    <div class="form-field">
      <label>${field.label}</label>
      ${control}
      ${field.hint ? `<div class="threshold-hint"><span class="header-icon">${icon("i-warning")}</span><span>${field.hint}</span></div>` : ""}
    </div>
  `;
}

function renderStatsGrid(stats) {
  return `
    <div class="stats-grid">
      ${stats
        .map(
          (item) => `
            <article class="stats-card">
              <div class="metric-icon ${item.iconClass}">
                ${icon(item.icon)}
              </div>
              <div>
                <p class="stats-number">${item.value}</p>
                <div class="stats-label">${item.label}</div>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFilterField(field) {
  return `
    <label class="inline-field ${field.type === "input" ? "is-search" : ""}">
      <span>${field.label}</span>
      ${
        field.type === "input"
          ? `
            <span class="filter-control-wrap">
              <span class="filter-field-icon">${icon("i-search")}</span>
              <input type="text" placeholder="${field.placeholder || ""}" />
            </span>
          `
          : `
            <span class="filter-control-wrap">
              <select>
                ${(field.options || []).map((option) => `<option>${option}</option>`).join("")}
              </select>
              <span class="filter-field-icon is-right">${icon("i-chevron")}</span>
            </span>
          `
      }
    </label>
  `;
}

function renderTableCell(row, column, pageKey) {
  if (column.key === "status") {
    return `<span class="table-status ${row.status.className}">${row.status.text}</span>`;
  }

  if (column.key === "actions") {
    return `
      <div class="table-actions">
        ${row.actions
          .map(
            (action) => `
              <button
                class="table-link ${action.tone === "danger" ? "is-danger" : ""}"
                type="button"
                data-table-action="${pageKey}|${action.id || action.label}|${row.id || row.name || row.code}"
              >
                ${action.label}
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  const text = row[column.key] ?? "--";
  return `<span class="table-cell-text" title="${escapeHtml(text)}">${escapeHtml(text)}</span>`;
}

function renderAnalysisPage(page) {
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(page.rows.length / pageSize) || 1);
  const current = Math.min(state.pagination[page.key] || 1, pageCount);
  state.pagination[page.key] = current;
  const pageRows = page.rows.slice((current - 1) * pageSize, current * pageSize);

  return `
    <div class="page-section analysis-page">
      <div class="page-title-row">
        <h1 class="page-title">${page.title}</h1>
        <button class="toolbar-primary" type="button" data-primary-action="${page.key}">
          <span class="header-icon">${icon("i-plus")}</span>
          <span>${page.primaryButton}</span>
        </button>
      </div>

      ${page.stats ? renderStatsGrid(page.stats) : ""}

      <section class="filter-card">
        <div class="card-section-head">
          <div>
            <h2 class="card-section-title">筛选条件</h2>
            <p class="card-section-desc">${page.title}支持按关键词与维度组合检索</p>
          </div>
        </div>
        <div class="filter-row">
          ${page.filters.map(renderFilterField).join("")}
          <div class="filter-actions">
            <button class="filter-button" type="button" data-filter-action="search|${page.key}">搜索</button>
            <button class="reset-link" type="button" data-filter-action="reset|${page.key}">重置</button>
          </div>
        </div>
      </section>

      <section class="table-wrap">
        <div class="card-section-head is-divider">
          <div>
            <h2 class="card-section-title">数据列表</h2>
            <p class="card-section-desc">${page.title}结果按分页展示</p>
          </div>
        </div>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th class="checkbox-cell"><div class="row-check"></div></th>
                ${page.columns.map((column) => `<th>${column.label}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${
                pageRows.length
                  ? pageRows
                      .map(
                        (row) => `
                          <tr>
                            <td class="checkbox-cell"><div class="row-check"></div></td>
                            ${page.columns.map((column) => `<td>${renderTableCell(row, column, page.key)}</td>`).join("")}
                          </tr>
                        `
                      )
                      .join("")
                  : `
                    <tr class="table-empty-row">
                      <td colspan="${page.columns.length + 1}">
                        ${renderEmptyState("暂无数据", `当前没有${page.title}相关记录`)}
                      </td>
                    </tr>
                  `
              }
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <span>${page.footer}</span>
          ${renderPagination(page.key, pageCount)}
        </div>
      </section>
    </div>
  `;
}

function getGeneProject(projectId) {
  return geneProjectLibrary[projectId] || geneProjectLibrary["gene-lysine"];
}

function geneStatusClass(status) {
  if (status === "已完成") {
    return "is-normal";
  }
  if (status === "分析中") {
    return "is-warning";
  }
  return "is-error";
}

function renderGeneModalShell({ title, sizeClass = "", body, footer = "" }) {
  return `
    <div class="modal-layer">
      <section class="modal gene-modal ${sizeClass}">
        <header class="gene-modal-header">
          <h3 class="gene-modal-title">${escapeHtml(title)}</h3>
          <button class="gene-modal-close" type="button" data-close-modal="gene">
            <span class="header-icon">${icon("i-close")}</span>
          </button>
        </header>
        <div class="gene-modal-body">${body}</div>
        ${footer ? `<footer class="gene-modal-footer">${footer}</footer>` : ""}
      </section>
    </div>
  `;
}

function renderGeneField(field) {
  const fieldClass = `gene-field ${field.full ? "is-full" : ""}`;
  const label = `<label>${escapeHtml(field.label)}</label>`;
  const fieldName = escapeHtml(field.name || "");

  if (field.type === "select") {
    return `
      <div class="${fieldClass}">
        ${label}
        <select class="gene-control" data-gene-field="${fieldName}">
          ${field.options
            .map(
              (option) => `
                <option ${option === field.value ? "selected" : ""}>${escapeHtml(option)}</option>
              `
            )
            .join("")}
        </select>
      </div>
    `;
  }

  if (field.type === "textarea") {
    return `
      <div class="${fieldClass}">
        ${label}
        <textarea class="gene-control gene-textarea" rows="4" data-gene-field="${fieldName}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(field.value || "")}</textarea>
      </div>
    `;
  }

  return `
    <div class="${fieldClass}">
      ${label}
      <input class="gene-control" type="text" data-gene-field="${fieldName}" value="${escapeHtml(field.value || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />
    </div>
  `;
}

function renderAnalysisField(field) {
  return renderGeneField(field);
}

function renderAnalysisControl(field) {
  const fieldName = escapeHtml(field.name || "");
  if (field.type === "select") {
    return `
      <select class="gene-control" data-gene-field="${fieldName}">
        ${field.options
          .map(
            (option) => `
              <option ${option === field.value ? "selected" : ""}>${escapeHtml(option)}</option>
            `
          )
          .join("")}
      </select>
    `;
  }

  if (field.type === "textarea") {
    return `<textarea class="gene-control gene-textarea" rows="4" data-gene-field="${fieldName}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(field.value || "")}</textarea>`;
  }

  return `<input class="gene-control" type="text" data-gene-field="${fieldName}" value="${escapeHtml(field.value || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />`;
}

function renderFullModuleOptions(selectedModules = []) {
  const options = [
    { id: "genotype", label: "基因型-表型分析" },
    { id: "omics", label: "组学数据分析" },
    { id: "process", label: "发酵过程分析" },
    { id: "patent", label: "专利风险分析" }
  ];

  return `
    <div class="full-module-grid">
      ${options
        .map(
          (option) => `
            <label class="full-module-item">
              <input type="checkbox" data-analysis-module="${option.id}" ${selectedModules.includes(option.id) ? "checked" : ""} />
              <span class="full-module-check"></span>
              <span>${escapeHtml(option.label)}</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOmicsFormModal(mode, itemId = "") {
  const current = itemId ? hydrateOmicsItem(getAnalysisRow("omics", itemId) || {}) : null;
  const title = mode === "edit" ? "编辑代谢模型" : "新建组学数据分析项目";
  const footerLabel = mode === "edit" ? "保存修改" : "确认创建";
  const fields = [
    { name: "analysis-name", label: "模型名称", value: current?.name || "", placeholder: "请输入代谢模型名称" },
    {
      name: "analysis-strain",
      label: "菌株类型",
      type: "select",
      value: current?.strain || "",
      options: ["请选择菌株类型", "大肠杆菌", "酵母菌", "芽孢杆菌"]
    },
    {
      name: "analysis-source",
      label: "模型来源",
      type: "select",
      value: current?.source || "",
      options: ["请选择模型来源", "文件导入", "数据库导入", "手动构建"]
    },
    {
      name: "analysis-description",
      label: "模型描述",
      type: "textarea",
      full: true,
      value: current?.description || "",
      placeholder: "请输入模型描述信息"
    }
  ];

  const uploadBox =
    mode === "edit"
      ? `
        <div class="gene-field is-full">
          <div class="omics-upload-panel">
            <div class="omics-upload-icon">${icon("i-upload")}</div>
            <p>已上传：${escapeHtml(current?.fileName || "model.xml")} <button class="table-link" type="button">点击重新上传</button></p>
            <span>支持 .xml, .json, .mat 格式，模型文件不超过200MB</span>
          </div>
        </div>
      `
      : "";

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form",
    body: `
      <div class="omics-form-grid">
        ${fields
          .map((field) => {
            const required = field.name !== "analysis-description" ? '<span class="omics-required">*</span>' : "";
            return `
              <div class="gene-field ${field.full ? "is-full" : ""}">
                <label>${required}${escapeHtml(field.label)}</label>
                ${renderAnalysisControl(field)}
              </div>
            `;
          })
          .join("")}
        ${uploadBox}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|omics|${itemId}">${footerLabel}</button>
    `
  });
}

function renderOmicsPathwayFlow(item) {
  const topNodes = item.pathwayNodes.slice(0, 7);
  const lowerNodes = item.pathwayNodes.slice(7);
  return `
    <div class="omics-flow-shell">
      <div class="omics-legend">
        <span><i class="is-substrate"></i>底物</span>
        <span><i class="is-middle"></i>中间产物</span>
        <span><i class="is-key"></i>关键节点</span>
        <span><i class="is-target"></i>目标产物</span>
      </div>
      <div class="omics-flow-stage">
        <div class="omics-flow-top">
          ${topNodes
            .map(
              (node) => `
                <div class="omics-node ${node.className}">
                  <span>${escapeHtml(node.label)}</span>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="omics-flow-bottom">
          ${lowerNodes
            .map(
              (node) => `
                <div class="omics-node ${node.className}">
                  <span>${escapeHtml(node.label)}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderOmicsOptimizationTable(item) {
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>靶点基因</th>
            <th>反应</th>
            <th>建议操作</th>
            <th>预期提升</th>
          </tr>
        </thead>
        <tbody>
          ${item.optimizationTargets
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.gene)}</td>
                  <td>${escapeHtml(row.reaction)}</td>
                  <td><span class="omics-action-tag ${row.actionClass}">${escapeHtml(row.action)}</span></td>
                  <td class="omics-gain">${escapeHtml(row.gain)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderOmicsNetworkCard(nodes) {
  return `
    <div class="omics-mini-graph is-network">
      ${nodes
        .map(
          (node) => `
            <span class="omics-mini-node ${node.className}" style="${node.style}">${escapeHtml(node.label)}</span>
          `
        )
        .join("")}
      <div class="omics-mini-legend">
        <span><i class="is-gene"></i>基因</span>
        <span><i class="is-metabolite"></i>代谢物</span>
        <span><i class="is-reaction"></i>反应</span>
      </div>
    </div>
  `;
}

function renderOmicsPanoramaCard(bars) {
  return `
    <div class="omics-panorama">
      ${bars
        .map(
          (bar) => `
            <div class="omics-panorama-bar ${bar.className}" style="width:${bar.width}%">
              <span>${escapeHtml(bar.label)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOmicsBalanceChart(rows) {
  return `
    <div class="omics-balance-chart">
      ${rows
        .map(
          (row) => `
            <div class="omics-balance-group">
              <div class="omics-balance-bars">
                <span class="is-a" style="height:${row.a}%"></span>
                <span class="is-b" style="height:${row.b}%"></span>
                <span class="is-c" style="height:${row.c}%"></span>
              </div>
              <em>${escapeHtml(row.label)}</em>
            </div>
          `
        )
        .join("")}
      <div class="omics-balance-legend">
        <span><i class="is-a"></i>基因表达</span>
        <span><i class="is-b"></i>反应通量</span>
        <span><i class="is-c"></i>代谢物浓度</span>
      </div>
    </div>
  `;
}

function renderOmicsEnergyCard(item) {
  return `
    <div class="omics-energy-layout">
      <div class="omics-mini-graph is-energy">
        ${item.gpaCards.energyNodes
          .map(
            (node) => `
              <span class="omics-mini-node ${node.className}" style="${node.style}">${escapeHtml(node.label)}</span>
            `
          )
          .join("")}
      </div>
      <div class="omics-line-chart">
        ${item.gpaCards.forecastLine
          .map(
            (value, index) => `
              <span class="omics-line-point" style="left:${index * 18}%;bottom:${value * 8}%"></span>
            `
          )
          .join("")}
        <svg viewBox="0 0 220 130" preserveAspectRatio="none" class="omics-line-svg" aria-hidden="true">
          <polyline
            fill="none"
            stroke="#4a74f3"
            stroke-width="3"
            points="${item.gpaCards.forecastLine.map((value, index) => `${index * 40},${125 - value * 10}`).join(" ")}"
          />
        </svg>
      </div>
    </div>
  `;
}

function renderOmicsDetailModal(itemId) {
  const item = hydrateOmicsItem(getAnalysisRow("omics", itemId) || {});
  if (!item.id) {
    return "";
  }

  const infoItems = [
    { label: "模型名称", value: item.name },
    { label: "菌株类型", value: item.strain },
    { label: "模型类型", value: item.type },
    { label: "反应数", value: item.reactions },
    { label: "代谢物数", value: item.metabolites },
    { label: "目标产物", value: item.targetProduct },
    { label: "预测通量", value: `${item.flux} mmol/g/h` },
    { label: "状态", html: `<span class="status-chip is-normal">${escapeHtml(item.status.text)}</span>` },
    { label: "创建时间", value: `${item.createdAt}:00` }
  ];

  return renderGeneModalShell({
    title: `代谢模型详情 - ${item.name}`,
    sizeClass: "is-gene-large omics-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "组学数据分析",
        title: item.name,
        description: "聚焦代谢模型、通路流量与 GPA 整合分析结果。",
        meta: [
          { value: item.strain },
          { value: item.type },
          { value: item.targetProduct },
          { html: `<span class="status-chip is-normal">${escapeHtml(item.status.text)}</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>基本信息</h4><p class="section-caption">模型基础属性与分析状态概览</p></div>
        </div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>代谢通路流量</h4><p class="section-caption">展示底物、中间产物、关键节点与目标产物流向</p></div>
        </div>
        ${renderOmicsPathwayFlow(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>关键优化靶点</h4><p class="section-caption">汇总关键基因调控动作及收益评估</p></div>
        </div>
        ${renderOmicsOptimizationTable(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>GPA数据整合分析</h4><p class="section-caption">从网络、通路、平衡与能量四个维度展示整合分析</p></div>
        </div>
        <div class="omics-gpa-grid">
          <article class="omics-gpa-card">
            <h5>基因组代谢网络模型展示</h5>
            <p>整合基因注释与代谢网络，可视化基因-反应-代谢物关联</p>
            ${renderOmicsNetworkCard(item.gpaCards.networkNodes)}
          </article>
          <article class="omics-gpa-card">
            <h5>细胞内代谢路径全景及关联图</h5>
            <p>展示主要代谢通路之间的流量流向与相互关系</p>
            ${renderOmicsPanoramaCard(item.gpaCards.panoramaBars)}
          </article>
          <article class="omics-gpa-card">
            <h5>代谢平衡待问题分析</h5>
            <p>分析基因-反应-代谢物关联平衡状态，识别代谢瓶颈</p>
            ${renderOmicsBalanceChart(item.gpaCards.balanceBars)}
          </article>
          <article class="omics-gpa-card">
            <h5>细胞能量代谢路径和产量预测图</h5>
            <p>分析ATP、NADH等能量分子供需，预测最优产量</p>
            ${renderOmicsEnergyCard(item)}
          </article>
        </div>
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|omics|${item.id}">编辑模型</button>
    `
  });
}

function renderOmicsDeleteModal(itemId) {
  const item = hydrateOmicsItem(getAnalysisRow("omics", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete omics-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定要删除此代谢模型吗？</h4>
        <p>模型名称: ${escapeHtml(item.name)}</p>
        <span>删除后将无法恢复，关联的分析结果和优化方案也将被删除。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|omics|${item.id}">确认删除</button>
    `
  });
}

function renderProcessFormModal(mode, itemId = "") {
  const current = itemId ? hydrateProcessItem(getAnalysisRow("process", itemId) || {}) : null;
  const title = mode === "edit" ? "编辑发酵优化模型" : "新建发酵过程分析项目";
  const footerLabel = mode === "edit" ? "保存修改" : "确认创建";
  const fields = [
    { name: "analysis-name", label: "模型名称", value: current?.name || "", placeholder: "请输入模型名称" },
    {
      name: "analysis-model",
      label: "模型类型",
      type: "select",
      value: current?.model || "",
      options: ["请选择模型类型", "代谢网络模型", "神经网络模型"]
    },
    {
      name: "analysis-strain",
      label: "菌株类型",
      type: "select",
      value: current?.strain || "",
      options: ["请选择菌株类型", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"]
    },
    {
      name: "analysis-goal",
      label: "优化目标",
      type: "select",
      value: current?.goal || "",
      options: ["请选择优化目标", "产量最大化", "生成速率最大化", "底物利用最大化"]
    },
    {
      name: "analysis-description",
      label: "模型描述",
      type: "textarea",
      full: true,
      value: current?.description || "",
      placeholder: "请输入模型描述信息"
    }
  ];

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form",
    body: `
      <div class="omics-form-grid">
        ${fields
          .map((field) => {
            const required = field.name !== "analysis-description" ? '<span class="omics-required">*</span>' : "";
            return `
              <div class="gene-field ${field.full ? "is-full" : ""}">
                <label>${required}${escapeHtml(field.label)}</label>
                ${renderAnalysisControl(field)}
              </div>
            `;
          })
          .join("")}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|process|${itemId}">${footerLabel}</button>
    `
  });
}

function renderProcessFlow(item) {
  return `
    <div class="process-flow-shell">
      ${item.processNodes
        .map(
          (node) => `
            <div class="process-flow-node ${node.className}">
              <span>${escapeHtml(node.label)}</span>
            </div>
          `
        )
        .join("")}
      <div class="process-flow-tail is-blue"></div>
      <div class="process-flow-tail is-red"></div>
      <div class="process-flow-tail is-green"></div>
    </div>
  `;
}

function renderProcessParamTable(item) {
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>参数名称</th>
            <th>当前值</th>
            <th>建议值</th>
            <th>影响程度</th>
          </tr>
        </thead>
        <tbody>
          ${item.optimizationParams
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.name)}</td>
                  <td>${escapeHtml(row.current)}</td>
                  <td>${escapeHtml(row.suggested)}</td>
                  <td><span class="process-impact-tag ${row.impactClass}">${escapeHtml(row.impact)}</span></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProcessResultPanel(item) {
  const rows = [
    { label: "当前产量", value: item.currentYield, tone: "" },
    { label: "优化后预测产量", value: item.optimizedYield, tone: "is-good" },
    { label: "预计提升幅度", value: item.improvement, tone: "is-good" },
    { label: "置信区间", value: item.confidenceRange, tone: "" }
  ];

  return `
    <div class="process-result-panel">
      ${rows
        .map(
          (row) => `
            <div class="process-result-row">
              <span>${escapeHtml(row.label)}</span>
              <strong class="${row.tone}">${escapeHtml(row.value)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProcessDetailModal(itemId) {
  const item = hydrateProcessItem(getAnalysisRow("process", itemId) || {});
  if (!item.id) {
    return "";
  }

  const infoItems = [
    { label: "模型名称", html: `<span class="process-name-link">${escapeHtml(item.name)}</span>` },
    { label: "模型类型", value: item.model },
    { label: "菌株类型", value: item.strain },
    { label: "优化目标", value: item.goal },
    { label: "预测提升", html: `<span class="process-good-text">${escapeHtml(item.improvement)}</span>` },
    { label: "参数数量", value: item.paramCount },
    { label: "创建时间", value: item.createdAt },
    { label: "状态", html: `<span class="status-chip is-normal">已完成</span>` }
  ];

  return renderGeneModalShell({
    title: `代谢网络模型详情 - ${item.name}`,
    sizeClass: "is-gene-large process-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "发酵过程分析",
        title: item.name,
        description: "聚合代谢网络优化、关键参数建议与预测结果输出。",
        meta: [
          { value: item.strain },
          { value: item.model },
          { value: item.goal },
          { html: `<span class="status-chip is-normal">已完成</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>基本信息</h4><p class="section-caption">模型基础属性、参数规模与完成状态</p></div>
        </div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>代谢网络优化</h4><p class="section-caption">展示发酵过程关键节点的优化路径</p></div>
        </div>
        ${renderProcessFlow(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>关键优化参数</h4><p class="section-caption">对比当前值、建议值与影响程度</p></div>
        </div>
        ${renderProcessParamTable(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>预测结果</h4><p class="section-caption">输出当前、优化后与置信区间结果</p></div>
        </div>
        ${renderProcessResultPanel(item)}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|process|${item.id}">编辑</button>
    `
  });
}

function renderProcessDeleteModal(itemId) {
  const item = hydrateProcessItem(getAnalysisRow("process", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete process-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定要删除此发酵优化模型吗？</h4>
        <p>模型名称: ${escapeHtml(item.name)}</p>
        <span>删除后将无法恢复，关联的优化参数和预测结果也将被删除。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|process|${item.id}">确认删除</button>
    `
  });
}

function renderFullFormModal(mode, itemId = "") {
  const current = itemId ? hydrateFullItem(getAnalysisRow("full", itemId) || {}) : null;
  const title = mode === "edit" ? "编辑分析项目" : "新建分析项目";
  const footerLabel = mode === "edit" ? "保存修改" : "确认创建";

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form full-form-modal",
    body: `
      <div class="omics-form-grid">
        <div class="gene-field">
          <label><span class="omics-required">*</span>项目名称</label>
          ${renderAnalysisControl({ name: "analysis-name", value: current?.name || "", placeholder: "请输入项目名称" })}
        </div>
        <div class="gene-field">
          <label><span class="omics-required">*</span>菌株类型</label>
          ${renderAnalysisControl({
            name: "analysis-strain",
            type: "select",
            value: current?.strain || "",
            options: ["请选择菌株类型", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"]
          })}
        </div>
        <div class="gene-field is-full">
          <label>项目分析描述</label>
          ${renderAnalysisControl({
            name: "analysis-description",
            type: "textarea",
            value: current?.description || "",
            placeholder: "请输入项目分析描述"
          })}
        </div>
        <div class="gene-field is-full">
          <label>选择分析模块</label>
          ${renderFullModuleOptions(current?.modules || [])}
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|full|${itemId}">${footerLabel}</button>
    `
  });
}

function renderFullInfoPanel(item) {
  const infoItems = [
    { label: "项目名称", html: `<span class="process-name-link">${escapeHtml(item.name)}</span>` },
    { label: "菌株类型", value: item.strain },
    { label: "目标产物", value: item.targetProduct },
    { label: "分析状态", html: `<span class="status-chip is-normal">已完成</span>` },
    { label: "创建时间", value: item.createdAt.split(" ")[0] },
    { label: "专利风险", html: `<span class="full-risk-chip">${escapeHtml(item.patentRisk)}</span>` }
  ];

  return `<section class="full-info-panel">${renderGeneInfoGrid(infoItems)}</section>`;
}

function renderFullAccordion(title, iconClass, content, expanded = true) {
  return `
    <section class="full-accordion ${expanded ? "is-open" : ""}">
      <div class="full-accordion-head">
        <div class="full-accordion-title">
          <span class="full-accordion-icon ${iconClass}"></span>
          <h4>${escapeHtml(title)}</h4>
        </div>
        <span class="full-accordion-arrow">${icon("i-chevron")}</span>
      </div>
      ${expanded ? `<div class="full-accordion-body">${content}</div>` : ""}
    </section>
  `;
}

function renderFullSummaryTable(type, item) {
  if (type === "gpa") {
    const row = item.gpaSummary;
    return `
      <div class="table-scroll gene-inner-table">
        <table class="data-table gene-snp-table">
          <thead>
            <tr>
              <th>项目名称</th>
              <th>菌株类型</th>
              <th>显著位点</th>
              <th>推荐基因型组合</th>
              <th>预测产量提升</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${escapeHtml(row.projectName)}</td>
              <td>${escapeHtml(row.strain)}</td>
              <td>${escapeHtml(row.significantSites)}</td>
              <td>${escapeHtml(row.recommendedGenes)}</td>
              <td class="omics-gain">${escapeHtml(row.improvement)}</td>
              <td><button class="table-link" type="button" data-analysis-open="gpa-detail|full|${item.id}">查看详情</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  const row = item.processSummary;
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>模型名称</th>
            <th>模型类型</th>
            <th>菌株类型</th>
            <th>优化目标</th>
            <th>预测提升</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${escapeHtml(row.modelName)}</td>
            <td>${escapeHtml(row.modelType)}</td>
            <td>${escapeHtml(row.strain)}</td>
            <td>${escapeHtml(row.goal)}</td>
            <td class="omics-gain">${escapeHtml(row.improvement)}</td>
            <td><button class="table-link" type="button" data-analysis-open="predict-detail|full|${item.id}">查看详情</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderFullDetailModal(itemId) {
  const item = hydrateFullItem(getAnalysisRow("full", itemId) || {});
  if (!item.id) {
    return "";
  }

  const collapsedSection = renderFullAccordion("综合参数预测模型", "is-bulb", "", false);
  const gpaSection = renderFullAccordion("GPA分析结果整合", "is-bars", renderFullSummaryTable("gpa", item), true);
  const processSection = renderFullAccordion("发酵过程分析结果整合", "is-chart", renderFullSummaryTable("process", item), true);

  return renderGeneModalShell({
    title: `项目详情 - ${item.name}`,
    sizeClass: "is-gene-large full-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "全流程数据分析",
        title: item.name,
        description: "整合 GPA 与发酵过程分析结果，统一展示项目级结论。",
        meta: [
          { value: item.strain },
          { value: item.targetProduct },
          { value: item.patentRisk },
          { html: `<span class="status-chip is-normal">已完成</span>` }
        ]
      })}
      ${renderFullInfoPanel(item)}
      ${collapsedSection}
      ${gpaSection}
      ${processSection}
    `,
    footer: `<button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>`
  });
}

function renderFullDeleteModal(itemId) {
  const item = hydrateFullItem(getAnalysisRow("full", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete full-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="full-delete-icon">!</div>
        <h4>确定要删除此分析项目吗？</h4>
        <p>项目名称：${escapeHtml(item.name)}</p>
        <span>删除后将无法恢复，关联的分析结果也将被删除。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|full|${item.id}">确认删除</button>
    `
  });
}

function renderFullGpaDetailModal(itemId) {
  const item = hydrateFullItem(getAnalysisRow("full", itemId) || {});
  const detail = item.gpaDetail;
  if (!item.id) {
    return "";
  }

  const infoItems = [
    { label: "项目名称", value: detail ? item.gpaSummary.projectName : item.name },
    { label: "菌株类型", value: item.gpaSummary.strain },
    { label: "目标产物", value: item.targetProduct },
    { label: "显著位点", value: item.gpaSummary.significantSites },
    { label: "推荐基因型组合", value: item.gpaSummary.recommendedGenes, full: true },
    { label: "预测产量提升", html: `<span class="process-good-text">${escapeHtml(item.gpaSummary.improvement)}</span>` }
  ];

  return renderGeneModalShell({
    title: "GPA分析详情 - 知识网络图谱",
    sizeClass: "is-gene-large full-linked-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "全流程数据分析 / GPA",
        title: item.name,
        description: "围绕知识网络、外源回路设计与专利风险评估展开详细分析。",
        meta: [
          { value: item.gpaSummary.strain },
          { value: item.targetProduct },
          { value: item.gpaSummary.significantSites },
          { html: `<span class="status-chip is-normal">已完成</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-square-icon"></span><h4>项目基本信息</h4></div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-star-icon">*</span><h4>标准化知识网络图谱</h4></div>
        <p class="full-section-desc">针对特定菌株、特定产物的标准化知识网络图谱，展示基因-代谢-表型关联网络</p>
        <div class="full-network-chart">
          ${detail.networkNodes
            .map(
              (node) => `
                <span class="full-network-node ${node.className}" style="${node.style}">${escapeHtml(node.label)}</span>
              `
            )
            .join("")}
          <div class="full-network-legend">
            <span><i class="is-gene"></i>基因</span>
            <span><i class="is-metabolite"></i>代谢物</span>
            <span><i class="is-path"></i>代谢通路</span>
            <span><i class="is-phenotype"></i>表型</span>
          </div>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-link-icon"></span><h4>辅助外源性回路设计</h4></div>
        <p class="full-section-desc">基于分析结果推荐的外源性基因回路设计方案</p>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead>
              <tr>
                <th>回路名称</th>
                <th>目标基因</th>
                <th>调控方式</th>
                <th>预期效果</th>
                <th>置信度</th>
              </tr>
            </thead>
            <tbody>
              ${detail.pathwayTable
                .map(
                  (row) => `
                    <tr>
                      <td>${escapeHtml(row.pathway)}</td>
                      <td>${escapeHtml(row.genes)}</td>
                      <td>${escapeHtml(row.mode)}</td>
                      <td>${escapeHtml(row.effect)}</td>
                      <td><span class="process-impact-tag ${row.confidence === "高" ? "is-low" : "is-mid"}">${escapeHtml(row.confidence)}</span></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-circle-icon"></span><h4>专利数据与竞争者警示</h4></div>
        <p class="full-section-desc">相关专利数据分析及潜在竞争者预警</p>
        <div class="full-risk-grid">
          <article class="full-risk-card is-warn">
            <span>专利风险等级</span>
            <strong>中等风险</strong>
            <em>共12项专利风险</em>
          </article>
          <article class="full-risk-card is-safe">
            <span>可自由实施区域</span>
            <strong>3个</strong>
            <em>建议优先开发</em>
          </article>
        </div>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead>
              <tr>
                <th>专利号</th>
                <th>专利名称</th>
                <th>持有人</th>
                <th>风险等级</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${detail.patents
                .map(
                  (row) => `
                    <tr>
                      <td>${escapeHtml(row.no)}</td>
                      <td>${escapeHtml(row.title)}</td>
                      <td>${escapeHtml(row.owner)}</td>
                      <td><span class="full-patent-risk ${row.riskClass}">${escapeHtml(row.risk)}</span></td>
                      <td>${escapeHtml(row.status)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `,
    footer: `<button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>`
  });
}

function renderFullPredictDetailModal(itemId) {
  const item = hydrateFullItem(getAnalysisRow("full", itemId) || {});
  const detail = item.predictDetail;
  if (!item.id) {
    return "";
  }

  const infoItems = [
    { label: "模型名称", value: item.processSummary.modelName },
    { label: "模型类型", value: item.processSummary.modelType },
    { label: "菌株类型", value: item.processSummary.strain },
    { label: "优化目标", value: item.processSummary.goal },
    { label: "预测提升", html: `<span class="process-good-text">${escapeHtml(item.processSummary.improvement)}</span>` },
    { label: "模型状态", html: `<span class="status-chip is-normal">已验证</span>` }
  ];

  return renderGeneModalShell({
    title: "发酵过程分析详情 - 参数预测模型",
    sizeClass: "is-gene-large full-linked-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "全流程数据分析 / 参数预测",
        title: item.processSummary.modelName,
        description: "聚焦参数预测、关键优化建议与原料消耗优化结果。",
        meta: [
          { value: item.processSummary.modelType },
          { value: item.processSummary.strain },
          { value: item.processSummary.goal },
          { html: `<span class="status-chip is-normal">已验证</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-square-icon"></span><h4>模型基本信息</h4></div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-bars-icon"></span><h4>发酵过程参数预测模型</h4></div>
        <p class="full-section-desc">指导微生物菌株的设计和优化，提高目标产物产量和降低原料消耗</p>
        <div class="full-line-chart">
          <div class="full-line-legend">
            <span><i class="is-blue"></i>当前产量</span>
            <span><i class="is-green"></i>优化后产量</span>
            <span><i class="is-yellow"></i>预测产量</span>
          </div>
          <svg viewBox="0 0 760 260" preserveAspectRatio="none" class="full-line-svg" aria-hidden="true">
            <polyline fill="none" stroke="#6f85f5" stroke-width="4" stroke-dasharray="2 6" points="${detail.chartPoints.current.map((v, i) => `${i * 100 + 30},${240 - v * 22}`).join(" ")}" />
            <polyline fill="none" stroke="#66bb4d" stroke-width="4" points="${detail.chartPoints.optimized.map((v, i) => `${i * 100 + 30},${240 - v * 22}`).join(" ")}" />
            <polyline fill="none" stroke="#f8bd3b" stroke-width="4" stroke-dasharray="6 6" points="${detail.chartPoints.predicted.map((v, i) => `${i * 100 + 30},${240 - v * 22}`).join(" ")}" />
          </svg>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-clock-icon"></span><h4>关键参数优化建议</h4></div>
        <p class="full-section-desc">基于模型预测的关键发酵参数优化方案</p>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead>
              <tr>
                <th>参数名称</th>
                <th>当前值</th>
                <th>优化建议值</th>
                <th>预期提升</th>
                <th>影响程度</th>
              </tr>
            </thead>
            <tbody>
              ${detail.paramSuggestions
                .map(
                  (row) => `
                    <tr>
                      <td>${escapeHtml(row.name)}</td>
                      <td>${escapeHtml(row.current)}</td>
                      <td class="process-name-link">${escapeHtml(row.optimized)}</td>
                      <td class="omics-gain">${escapeHtml(row.gain)}</td>
                      <td><span class="full-impact-bar"><i style="width:${row.level}%"></i></span></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-chart-icon"></span><h4>原料消耗优化预测</h4></div>
        <p class="full-section-desc">优化后原料消耗对比分析</p>
        <div class="full-material-grid">
          ${detail.materialStats
            .map(
              (row) => `
                <article class="full-material-card">
                  <span>${escapeHtml(row.label)}</span>
                  <strong>${escapeHtml(row.value)}</strong>
                  <em>${escapeHtml(row.sub)}</em>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `,
    footer: `<button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>`
  });
}

function renderServiceStatusTag(text, className = statusTextToClass(text)) {
  return `<span class="service-status-tag ${className}">${escapeHtml(text)}</span>`;
}

function renderServiceControl(field) {
  const attr = escapeHtml(field.name || "");

  if (field.type === "select") {
    return `
      <select class="gene-control" data-service-field="${attr}">
        ${(field.options || [])
          .map((option) => `<option ${option === field.value ? "selected" : ""}>${escapeHtml(option)}</option>`)
          .join("")}
      </select>
    `;
  }

  if (field.type === "textarea") {
    return `<textarea class="gene-control gene-textarea" rows="${field.rows || 4}" data-service-field="${attr}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(field.value || "")}</textarea>`;
  }

  return `<input class="gene-control" type="text" data-service-field="${attr}" value="${escapeHtml(field.value || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />`;
}

function renderServiceField(field) {
  return `
    <div class="gene-field ${field.full ? "is-full" : ""}">
      <label>${field.required ? '<span class="omics-required">*</span>' : ""}${escapeHtml(field.label)}</label>
      ${renderServiceControl(field)}
    </div>
  `;
}

function renderServiceInfoGrid(items) {
  return `
    <div class="service-info-grid">
      ${items
        .map(
          (item) => `
            <div class="service-info-item ${item.full ? "is-full" : ""}">
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.html || escapeHtml(item.value || "-")}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderServiceStepper(step) {
  return `
    <div class="service-stepper">
      ${serviceWizardSteps
        .map(
          (item) => `
            <button
              class="service-step ${item.step === step ? "is-current" : ""} ${item.step < step ? "is-done" : ""}"
              type="button"
              data-service-step="${item.step}"
            >
              <span class="service-step-index">${item.step < step ? "✓" : item.step}</span>
              <span class="service-step-label">${escapeHtml(item.label)}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderServiceImportPanel(modalState = {}) {
  const fileName = modalState.serviceImportFileName || "";
  const fileSize = modalState.serviceImportSize || 0;

  return `
    <section class="gene-section-card service-import-shell">
      <div class="service-import-box">
        <input class="service-file-input" type="file" accept=".csv,.xlsx,.xls" data-service-file-input />
        <div class="gene-upload-icon">${icon("i-upload")}</div>
        <h4>将文件拖拽到此处，或点击上传文件</h4>
        <p>支持格式：.xlsx、.xls、.csv，文件大小不超过 50MB</p>
        <div class="service-import-actions">
          <button class="modal-outline" type="button" data-service-upload-trigger="select">选择文件</button>
        </div>
        ${
          fileName
            ? `
              <div class="service-selected-file">
                <strong>${escapeHtml(fileName)}</strong>
                <span>文件大小：${escapeHtml(formatFileSize(fileSize))}</span>
              </div>
            `
            : '<div class="service-selected-file is-empty"><span>尚未选择文件</span></div>'
        }
      </div>
      <div class="service-note-card">
        <h5>导入说明</h5>
        <ol class="service-note-list">
          <li>下载模板文件，按模板格式整理工程细胞数据。</li>
          <li>必填字段：细胞编号、细胞名称、菌株类型。</li>
          <li>可选字段：基因型、状态。</li>
          <li>上传后系统将自动校验并批量导入。</li>
        </ol>
      </div>
    </section>
  `;
}

function renderServiceStepFields(step, draft) {
  const groups = {
    1: [
      { name: "code", label: "细胞编号", value: draft.code, placeholder: "请输入细胞编号", required: true },
      { name: "name", label: "细胞名称", value: draft.name, placeholder: "请输入细胞名称", required: true },
      {
        name: "strain",
        label: "菌株类型",
        type: "select",
        value: draft.strain,
        options: ["请选择菌株类型", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"],
        required: true
      },
      {
        name: "statusText",
        label: "状态",
        type: "select",
        value: draft.statusText,
        options: ["请选择状态", "已验证", "验证中", "待验证"],
        required: true
      },
      {
        name: "gene",
        label: "基因型",
        type: "textarea",
        full: true,
        rows: 3,
        value: draft.gene,
        placeholder: "请输入基因型信息"
      },
      {
        name: "description",
        label: "细胞描述",
        type: "textarea",
        full: true,
        rows: 4,
        value: draft.description,
        placeholder: "请输入细胞描述"
      }
    ],
    2: [
      { name: "cultureCode", label: "培养编号", value: draft.cultureCode, placeholder: "请输入培养编号", required: true },
      {
        name: "cultureMode",
        label: "培养方式",
        type: "select",
        value: draft.cultureMode,
        options: ["请选择培养方式", "摇瓶培养", "发酵罐培养", "微孔板培养"],
        required: true
      },
      {
        name: "temperature",
        label: "培养温度(℃)",
        value: draft.temperature,
        placeholder: "请输入培养温度",
        required: true
      },
      { name: "ph", label: "pH值", value: draft.ph, placeholder: "请输入pH值", required: true },
      { name: "rpm", label: "转速(rpm)", value: draft.rpm, placeholder: "请输入转速", required: true },
      {
        name: "cultureStatus",
        label: "培养状态",
        type: "select",
        value: draft.cultureStatus,
        options: ["请选择培养状态", "已完成", "优化中", "待验证"],
        required: true
      },
      {
        name: "mediumFormula",
        label: "培养基配方",
        type: "textarea",
        full: true,
        rows: 3,
        value: draft.mediumFormula,
        placeholder: "请输入培养基配方"
      },
      {
        name: "optimizationRecord",
        label: "优化记录",
        type: "textarea",
        full: true,
        rows: 4,
        value: draft.optimizationRecord,
        placeholder: "请输入优化记录"
      }
    ],
    3: [
      { name: "testCode", label: "检测编号", value: draft.testCode, placeholder: "请输入检测编号", required: true },
      {
        name: "testItem",
        label: "检测项目",
        type: "select",
        value: draft.testItem,
        options: ["请选择检测项目", "细胞活性检测", "细胞纯度检测", "表达稳定性检测", "代谢产物检测"],
        required: true
      },
      {
        name: "testMethod",
        label: "检测方法",
        type: "select",
        value: draft.testMethod,
        options: ["请选择检测方法", "流式细胞术", "HPLC", "显微成像", "酶活分析"],
        required: true
      },
      {
        name: "cellActivity",
        label: "细胞活性",
        type: "select",
        value: draft.cellActivity,
        options: ["请选择细胞活性", "高", "中", "低"],
        required: true
      },
      {
        name: "cellPurity",
        label: "细胞纯度",
        type: "select",
        value: draft.cellPurity,
        options: ["请选择细胞纯度", "高", "中", "低"],
        required: true
      },
      {
        name: "testResult",
        label: "检测结果",
        type: "select",
        value: draft.testResult,
        options: ["请选择检测结果", "符合预期", "需优化", "待复核"],
        required: true
      },
      {
        name: "testDescription",
        label: "检测描述",
        type: "textarea",
        full: true,
        rows: 4,
        value: draft.testDescription,
        placeholder: "请输入检测描述"
      }
    ],
    4: [
      { name: "applicationCode", label: "应用编号", value: draft.applicationCode, placeholder: "请输入应用编号", required: true },
      {
        name: "scenarioType",
        label: "应用场景类型",
        type: "select",
        value: draft.scenarioType,
        options: ["请选择应用场景", "生物制造", "合成生物学", "医药研发", "农业应用"],
        required: true
      },
      {
        name: "applicationField",
        label: "应用领域",
        value: draft.applicationField,
        placeholder: "请输入应用领域",
        required: true
      },
      {
        name: "applicationStatus",
        label: "应用状态",
        type: "select",
        value: draft.applicationStatus,
        options: ["请选择应用状态", "已验证", "验证中", "待验证"],
        required: true
      },
      {
        name: "applicationContent",
        label: "工程化应用信息内容",
        type: "textarea",
        full: true,
        rows: 5,
        value: draft.applicationContent,
        placeholder: "请输入工程化应用信息"
      }
    ]
  };

  return `
    <section class="gene-section-card service-form-card">
      <div class="gene-section-head">
        <h4>${escapeHtml(serviceWizardSteps.find((item) => item.step === step)?.label || "工程细胞信息")}</h4>
      </div>
      <div class="service-form-grid">
        ${(groups[step] || []).map(renderServiceField).join("")}
      </div>
    </section>
  `;
}

function renderServiceFormModal(mode, itemId = "") {
  const current = itemId ? hydrateServiceItem(getAnalysisRow("service", itemId) || {}) : null;
  const modalState = state.modal || {};
  const method = modalState.serviceMethod || (mode === "edit" ? "manual" : "file");
  const step = state.modal?.serviceStep || 1;
  const draft = {
    ...createServiceEmptyDraft(),
    ...(state.modal?.serviceDraft || buildServiceDraft(current))
  };
  const footer =
    method === "manual"
      ? `
        <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
        <div class="service-form-actions">
          ${step > 1 ? '<button class="modal-outline" type="button" data-service-nav="prev">上一步</button>' : ""}
          ${
            step < 4
              ? '<button class="modal-primary" type="button" data-service-nav="next">下一步</button>'
              : `<button class="modal-primary" type="button" data-analysis-submit="${mode}|service|${itemId}">${mode === "edit" ? "保存修改" : "确认创建"}</button>`
          }
        </div>
      `
      : `
        <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
        <button class="modal-primary" type="button" data-service-import="submit" ${modalState.serviceImportContent ? "" : "disabled"}>开始导入</button>
      `;

  return renderGeneModalShell({
    title: mode === "edit" ? "编辑工程细胞" : "新增工程细胞",
    sizeClass: "is-gene-large service-form-modal",
    body: `
      <div class="service-mode-tabs">
        <button class="service-mode-tab ${method === "file" ? "is-active" : ""}" type="button" data-service-method="file">文件导入方式</button>
        <button class="service-mode-tab ${method === "manual" ? "is-active" : ""}" type="button" data-service-method="manual">手工录入方式</button>
      </div>
      ${
        method === "file"
          ? renderServiceImportPanel(modalState)
          : `
            ${renderServiceStepper(step)}
            ${renderServiceStepFields(step, draft)}
          `
      }
    `,
    footer
  });
}

function renderServiceDetailModal(itemId) {
  const item = hydrateServiceItem(getAnalysisRow("service", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: `工程细胞详情 - ${item.code} ${item.name}`,
    sizeClass: "is-gene-large service-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "工程细胞服务",
        title: item.name,
        description: "汇总细胞基本属性、培养优化、检测分析与工程化应用信息。",
        meta: [
          { value: item.basicInfo.code },
          { value: item.basicInfo.strain },
          { value: item.applicationInfo.applicationField },
          { html: renderServiceStatusTag(item.status.text, item.status.className) }
        ]
      })}
      <section class="service-overview-card">
        <div>
          <p class="service-overview-label">工程细胞服务</p>
          <h4>${escapeHtml(item.name)}</h4>
          <p class="service-overview-text">${escapeHtml(item.description)}</p>
        </div>
        ${renderServiceStatusTag(item.status.text, item.status.className)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>细胞基本信息</h4><p class="section-caption">展示细胞编号、菌株类型、状态与描述信息</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "细胞编号", value: item.basicInfo.code },
          { label: "细胞名称", value: item.basicInfo.name },
          { label: "菌株类型", value: item.basicInfo.strain },
          { label: "基因型", value: item.basicInfo.gene, full: true },
          { label: "状态", html: renderServiceStatusTag(item.basicInfo.statusText) },
          { label: "创建时间", value: item.createdAt || "-" },
          { label: "细胞描述", value: item.basicInfo.description, full: true }
        ])}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>培养与优化信息</h4><p class="section-caption">记录培养条件、培养基配方和优化过程</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "培养编号", value: item.cultureInfo.cultureCode },
          { label: "培养方式", value: item.cultureInfo.cultureMode },
          { label: "培养温度(℃)", value: item.cultureInfo.temperature },
          { label: "pH值", value: item.cultureInfo.ph },
          { label: "转速(rpm)", value: item.cultureInfo.rpm },
          { label: "培养状态", html: renderServiceStatusTag(item.cultureInfo.cultureStatus) },
          { label: "培养基配方", value: item.cultureInfo.mediumFormula, full: true },
          { label: "优化记录", value: item.cultureInfo.optimizationRecord, full: true }
        ])}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>分析与检测信息</h4><p class="section-caption">展示检测项目、方法与结果说明</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "检测编号", value: item.analysisInfo.testCode },
          { label: "检测项目", value: item.analysisInfo.testItem },
          { label: "检测方法", value: item.analysisInfo.testMethod },
          { label: "细胞活性", value: item.analysisInfo.cellActivity },
          { label: "细胞纯度", value: item.analysisInfo.cellPurity },
          { label: "检测结果", value: item.analysisInfo.testResult },
          { label: "检测描述", value: item.analysisInfo.testDescription, full: true }
        ])}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>工程化应用信息</h4><p class="section-caption">沉淀场景类型、应用领域和应用状态</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "应用编号", value: item.applicationInfo.applicationCode },
          { label: "应用场景类型", value: item.applicationInfo.scenarioType },
          { label: "应用领域", value: item.applicationInfo.applicationField },
          { label: "应用状态", html: renderServiceStatusTag(item.applicationInfo.applicationStatus) },
          { label: "工程化应用信息内容", value: item.applicationInfo.applicationContent, full: true }
        ])}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|service|${item.id}">编辑</button>
    `
  });
}

function renderServiceDeleteModal(itemId) {
  const item = hydrateServiceItem(getAnalysisRow("service", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete service-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="full-delete-icon">!</div>
        <h4>确定要删除此工程细胞吗？</h4>
        <p>细胞编号：${escapeHtml(item.code)}</p>
        <p>细胞名称：${escapeHtml(item.name)}</p>
        <span>删除后将同步移除其培养、检测和工程化应用信息，且操作不可恢复。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|service|${item.id}">确认删除</button>
    `
  });
}

function renderGeneInfoGrid(items) {
  return `
    <div class="gene-info-grid">
      ${items
        .map(
          (item) => `
            <div class="gene-info-item ${item.full ? "is-full" : ""}">
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.html || escapeHtml(item.value)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDetailHero({ eyebrow = "", title = "", description = "", meta = [] }) {
  return `
    <section class="detail-hero-card">
      <div class="detail-hero-main">
        ${eyebrow ? `<p class="detail-hero-eyebrow">${escapeHtml(eyebrow)}</p>` : ""}
        <h3 class="detail-hero-title">${escapeHtml(title)}</h3>
        ${description ? `<p class="detail-hero-desc">${escapeHtml(description)}</p>` : ""}
      </div>
      ${
        meta.length
          ? `
            <div class="detail-hero-meta">
              ${meta
                .map((item) => `<span class="detail-hero-tag">${item.html || escapeHtml(item.value || "")}</span>`)
                .join("")}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function formatGeneChartNumber(value) {
  return Number(value).toLocaleString("en-US");
}

function renderGeneResultCard(title, content, extraClass = "") {
  return `
    <section class="gene-result-card ${extraClass}">
      <div class="gene-result-section-head">
        <h4>${escapeHtml(title)}</h4>
      </div>
      ${content}
    </section>
  `;
}

function renderGeneResultScatter(chart) {
  const width = 560;
  const height = 286;
  const margin = { top: 18, right: 16, bottom: 34, left: 54 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const xMax = Math.max(chart.xMax || 1, 1);
  const yMax = Math.max(chart.yMax || 1, 1);
  const xTicks = chart.xTicks || [0, xMax];
  const yTicks = chart.yTicks || [0, yMax];
  const scaleX = (value) => margin.left + (value / xMax) * plotWidth;
  const scaleY = (value) => height - margin.bottom - (value / yMax) * plotHeight;

  return `
    <div class="gene-result-chart">
      <svg class="gene-result-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        ${yTicks
          .map((tick) => {
            const y = scaleY(tick);
            return `
              <line class="gene-result-grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
              <text class="gene-result-tick-text" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${tick}</text>
            `;
          })
          .join("")}
        <line class="gene-result-axis-line" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
        <line class="gene-result-axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
        ${xTicks
          .map((tick) => {
            const x = scaleX(tick);
            return `<text class="gene-result-tick-text" x="${x}" y="${height - 10}" text-anchor="middle">${formatGeneChartNumber(tick)}</text>`;
          })
          .join("")}
        ${chart.points
          .map((point) => {
            const cx = scaleX(point.x);
            const cy = scaleY(point.y);
            return `
              <circle
                cx="${cx}"
                cy="${cy}"
                r="${point.highlight ? 3.8 : 3.2}"
                fill="${point.highlight ? "#ff6b6b" : "#5a78ea"}"
                fill-opacity="${point.highlight ? "0.95" : "0.9"}"
              ></circle>
            `;
          })
          .join("")}
      </svg>
    </div>
  `;
}

function renderGeneResultHistogram(chart) {
  const width = 560;
  const height = 286;
  const margin = { top: 18, right: 12, bottom: 58, left: 48 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const yMax = Math.max(chart.yMax || 1, 1);
  const ticks = [0, Math.round(yMax / 5), Math.round((yMax / 5) * 2), Math.round((yMax / 5) * 3), Math.round((yMax / 5) * 4), yMax];
  const barSpace = plotWidth / Math.max(chart.bars.length, 1);
  const barWidth = Math.max(6, barSpace - 3);
  const scaleY = (value) => height - margin.bottom - (value / yMax) * plotHeight;

  return `
    <div class="gene-result-chart">
      <svg class="gene-result-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        ${ticks
          .map((tick) => {
            const y = scaleY(tick);
            return `
              <line class="gene-result-grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
              <text class="gene-result-tick-text" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${tick}</text>
            `;
          })
          .join("")}
        <line class="gene-result-axis-line" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
        <line class="gene-result-axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
        ${chart.bars
          .map((bar, index) => {
            const x = margin.left + index * barSpace + (barSpace - barWidth) / 2;
            const y = scaleY(bar.value);
            return `<rect x="${x}" y="${y}" width="${barWidth}" height="${height - margin.bottom - y}" rx="1.5" fill="#4964e7"></rect>`;
          })
          .join("")}
        ${chart.bars
          .map((bar, index) => {
            const shouldShow = index % (chart.labelStep || 1) === 0 || index === chart.bars.length - 1;
            if (!shouldShow) {
              return "";
            }

            const x = margin.left + index * barSpace + barSpace / 2;
            const y = height - margin.bottom + 18;
            return `
              <text
                class="gene-result-tick-text"
                x="${x}"
                y="${y}"
                text-anchor="start"
                transform="rotate(45 ${x} ${y})"
              >${escapeHtml(bar.label)}</text>
            `;
          })
          .join("")}
      </svg>
    </div>
  `;
}

function renderGeneResultChromosomeChart(chart) {
  const width = 1120;
  const height = 268;
  const margin = { top: 16, right: 18, bottom: 38, left: 54 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const yMax = Math.max(chart.yMax || 1, 1);
  const ticks = Array.from({ length: Math.floor(yMax / 2) + 1 }, (_, index) => index * 2);
  const band = plotWidth / Math.max(chart.bars.length, 1);
  const barWidth = Math.min(64, band * 0.48);
  const scaleY = (value) => height - margin.bottom - (value / yMax) * plotHeight;

  return `
    <div class="gene-result-chart gene-result-chart-wide">
      <svg class="gene-result-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        ${ticks
          .map((tick) => {
            const y = scaleY(tick);
            return `
              <line class="gene-result-grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
              <text class="gene-result-tick-text" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${tick}</text>
            `;
          })
          .join("")}
        <line class="gene-result-axis-line" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
        <line class="gene-result-axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
        ${chart.bars
          .map((bar, index) => {
            const x = margin.left + index * band + (band - barWidth) / 2;
            const y = scaleY(bar.value);
            const textX = margin.left + index * band + band / 2;
            return `
              <rect x="${x}" y="${y}" width="${barWidth}" height="${height - margin.bottom - y}" fill="${bar.color}" rx="0"></rect>
              <text class="gene-result-label-text" x="${textX}" y="${height - 10}" text-anchor="middle">${escapeHtml(bar.label)}</text>
            `;
          })
          .join("")}
      </svg>
    </div>
  `;
}

function renderGeneScatter(points) {
  return `
    <div class="gene-scatter">
      <div class="gene-chart-gridlines"></div>
      ${points
        .map(
          (point) => `
            <span
              class="gene-dot ${point.highlight ? "is-highlight" : ""}"
              style="left:${point.x}%;bottom:${point.y}%"
            ></span>
          `
        )
        .join("")}
      <div class="gene-axis-note gene-axis-left">-log10(P)</div>
      <div class="gene-axis-note gene-axis-bottom">染色体位置</div>
    </div>
  `;
}

function renderGeneHistogram(values) {
  return `
    <div class="gene-histogram">
      ${values
        .map(
          (value, index) => `
            <div class="gene-bar-wrap">
              <span class="gene-bar" style="height:${value}%"></span>
              <em>${index + 1}</em>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGeneChromosomeBars(items) {
  return `
    <div class="gene-horizontal-bars">
      ${items
        .map(
          (item) => `
            <div class="gene-horizontal-row">
              <span>${escapeHtml(item.label)}</span>
              <div class="gene-horizontal-track">
                <span style="width:${Math.min(item.value * 2.4, 100)}%"></span>
              </div>
              <strong>${escapeHtml(String(item.value))}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGeneChartCard(title, content, description = "") {
  return `
    <section class="gene-chart-card">
      <div class="gene-chart-head">
        <div>
          <h4>${escapeHtml(title)}</h4>
          ${description ? `<p class="section-caption">${escapeHtml(description)}</p>` : ""}
        </div>
      </div>
      ${content}
    </section>
  `;
}

function renderGeneSnpTable(rows, options = {}) {
  const { showAction = false, projectId = "", tableClass = "" } = options;

  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table ${tableClass}">
        <thead>
          <tr>
            <th>排名</th>
            <th>染色体</th>
            <th>位置</th>
            <th>SNP ID</th>
            <th>P值</th>
            <th>效应值</th>
            <th>关联基因</th>
            ${showAction ? "<th>操作</th>" : ""}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(String(row.rank))}</td>
                  <td>${escapeHtml(row.chromosome)}</td>
                  <td>${escapeHtml(row.position)}</td>
                  <td>${escapeHtml(row.snpId)}</td>
                  <td><span class="gene-result-pvalue ${row.pValueTone ? `is-${row.pValueTone}` : ""}">${escapeHtml(row.pValue)}</span></td>
                  <td>${escapeHtml(row.effect)}</td>
                  <td>${escapeHtml(row.gene)}</td>
                  ${
                    showAction
                      ? `<td><button class="table-link" type="button" data-gene-open="detail|${projectId}">查看详情</button></td>`
                      : ""
                  }
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderGeneDatasetPreview(dataset) {
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>#CHROM</th>
            <th>POS</th>
            <th>ID</th>
            <th>REF</th>
            <th>ALT</th>
            <th>QUAL</th>
            <th>FILTER</th>
            <th>INFO</th>
          </tr>
        </thead>
        <tbody>
          ${dataset.preview
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.chrom)}</td>
                  <td>${escapeHtml(row.pos)}</td>
                  <td>${escapeHtml(row.id)}</td>
                  <td>${escapeHtml(row.ref)}</td>
                  <td>${escapeHtml(row.alt)}</td>
                  <td>${escapeHtml(row.qual)}</td>
                  <td>${escapeHtml(row.filter)}</td>
                  <td>${escapeHtml(row.info)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderGeneFormModal(mode, projectId = "") {
  const project = projectId ? getGeneProject(projectId) : null;
  const isEdit = mode === "edit";
  const title = isEdit ? "编辑分析项目" : "新增分析项目";
  const submitLabel = isEdit ? "保存修改" : "确认创建";
  const fields = [
    { name: "name", label: "项目名称", value: project?.name || "", placeholder: "请输入项目名称" },
    {
      name: "strain",
      label: "菌株类型",
      type: "select",
      value: project?.strain || "",
      options: ["请选择菌株类型", "大肠杆菌", "酵母菌", "芽孢杆菌"]
    },
    {
      name: "phenotype",
      label: "表型类型",
      type: "select",
      value: project?.phenotype || "",
      options: ["请选择表型类型", "产量", "生长速率", "底物利用率"]
    },
    {
      name: "method",
      label: "分析方法",
      type: "select",
      value: project?.method || "",
      options: ["请选择分析方法", "GWAS分析", "关联分析", "候选位点分析"]
    },
    { name: "threshold", label: "显著性阈值", value: project?.threshold || "", placeholder: "请输入显著性阈值" },
    {
      name: "description",
      label: "项目描述",
      type: "textarea",
      full: true,
      value: project?.description || "",
      placeholder: "请输入项目描述"
    }
  ];

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form",
    body: `<div class="gene-form-grid">${fields.map(renderGeneField).join("")}</div>`,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gene">取消</button>
      <button class="modal-primary" type="button" data-gene-submit="${isEdit ? `save|${project.id}` : "create"}">${submitLabel}</button>
    `
  });
}

function renderGeneUploadModal(projectId) {
  const project = getGeneProject(projectId);

  return renderGeneModalShell({
    title: "上传数据集",
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${renderGeneField({ name: "datasetName", label: "数据集名称", value: project.dataset.name, placeholder: "请输入数据集名称" })}
        ${renderGeneField({ name: "datasetType", label: "数据类型", type: "select", value: project.dataset.type, options: ["VCF", "BED", "FAM", "PHE", "CSV"] })}
        ${renderGeneField({ name: "strain", label: "菌株类型", type: "select", value: project.strain, options: ["大肠杆菌", "酵母菌", "芽孢杆菌"] })}
        ${renderGeneField({ name: "datasetSize", label: "数据大小", value: project.dataset.size, placeholder: "例如 256.78 MB" })}
        <div class="gene-field is-full">
          <label>上传文件</label>
          <div class="gene-upload-box">
            <div class="gene-upload-icon">${icon("i-upload")}</div>
            <p>拖拽文件到此处或点击上传</p>
            <span>支持格式: .vcf .bed .fam .phe .csv，单个文件最大 500MB</span>
          </div>
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gene">取消</button>
      <button class="modal-primary" type="button" data-gene-submit="upload|${project.id}">开始上传</button>
    `
  });
}

function renderGeneDeleteModal(projectId) {
  const project = getGeneProject(projectId);

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定删除该分析项目吗？</h4>
        <p>${escapeHtml(project.name)}</p>
        <span>删除后项目配置、数据集和分析结果将无法恢复，请谨慎操作。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gene">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-gene-submit="delete|${project.id}">确认删除</button>
    `
  });
}

function renderGeneResultModal(projectId) {
  const project = getGeneProject(projectId);
  const metricTones = ["is-blue", "is-green", "is-orange", "is-dark"];
  const scatter = project.resultScatter || buildGeneResultScatterFallback(project);
  const histogram = project.resultHistogram || buildGeneResultHistogramFallback(project);
  const chromosomes = project.resultChromosomes || buildGeneResultChromosomeFallback(project);
  const tableRows = project.resultSnps || project.snps.slice(0, 5);

  return renderGeneModalShell({
    title: `分析结果 - ${project.name}`,
    sizeClass: "is-gene-large",
    body: `
      <div class="gene-result-view">
        <section class="gene-result-metrics">
          ${project.metrics
            .map(
              (item, index) => `
                <article class="gene-result-metric-card ${metricTones[index] || ""}">
                  <span>${escapeHtml(item.label)}</span>
                  <strong>${escapeHtml(item.value)}</strong>
                </article>
              `
            )
            .join("")}
        </section>

        <section class="gene-result-grid">
          ${renderGeneResultCard("全基因组关联分析", renderGeneResultScatter(scatter))}
          ${renderGeneResultCard("P值分布情况", renderGeneResultHistogram(histogram))}
        </section>

        ${renderGeneResultCard("显著位点染色体分布情况", renderGeneResultChromosomeChart(chromosomes), "is-wide")}

        <section class="gene-result-card gene-result-table-card">
          <div class="gene-result-section-head">
            <h4>显著位点列表</h4>
            <button class="table-link" type="button" data-gene-open="detail|${project.id}">查看全部</button>
          </div>
          ${renderGeneSnpTable(tableRows, {
            showAction: true,
            projectId: project.id,
            tableClass: "is-result-table"
          })}
        </section>
      </div>
    `,
    footer: `<button class="modal-outline" type="button" data-close-modal="gene">关闭</button>`
  });

  return renderGeneModalShell({
    title: `分析结果 - ${project.name}`,
    sizeClass: "is-gene-large",
    body: `
      ${renderDetailHero({
        eyebrow: "基因型-表型分析",
        title: project.name,
        description: "集中展示显著位点、统计图谱与基因型组合预测结果。",
        meta: [
          { value: project.strain },
          { value: project.phenotype },
          { value: project.method },
          { html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` }
        ]
      })}
      <section class="gene-metric-grid">
        ${project.metrics
          .map(
            (item) => `
              <article class="gene-metric-card">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.value)}</strong>
              </article>
            `
          )
          .join("")}
      </section>

      <section class="gene-chart-grid">
        ${renderGeneChartCard("全基因组关联分析", renderGeneScatter(project.points), "以散点形式展示关联显著性分布")}
        ${renderGeneChartCard("P值分布情况", renderGeneHistogram(project.pValueBars), "观察各区段 P 值频次分布")}
        ${renderGeneChartCard("显著位点染色体分布情况", renderGeneChromosomeBars(project.chromosomeBars), "对比各染色体显著位点数量")}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>显著位点列表</h4><p class="section-caption">展示当前项目识别到的关键 SNP 位点</p></div>
          <button class="table-link" type="button" data-gene-open="detail|${project.id}">查看全部</button>
        </div>
        ${renderGeneSnpTable(project.snps, { showAction: true, projectId: project.id })}
      </section>
    `,
    footer: `<button class="modal-outline" type="button" data-close-modal="gene">关闭</button>`
  });
}

function renderGeneDetailModal(projectId, tab = "project") {
  const project = getGeneProject(projectId);
  const dataset = project.dataset;
  const projectInfo = [
    { label: "项目名称", value: project.name },
    { label: "菌株类型", value: project.strain },
    { label: "表型类型", value: project.phenotype },
    { label: "分析方法", value: project.method },
    { label: "显著性阈值", value: project.threshold },
    { label: "分析状态", html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` },
    { label: "样本数", value: project.samples },
    { label: "显著位点", value: project.sites },
    { label: "创建时间", value: project.createdAt },
    { label: "更新时间", value: project.updatedAt }
  ];
  const datasetInfo = [
    { label: "数据集名称", value: dataset.name },
    { label: "文件类型", value: dataset.type },
    { label: "样本数", value: project.samples },
    { label: "位点数", value: dataset.sites },
    { label: "数据大小", value: dataset.size },
    { label: "上传时间", value: dataset.uploadedAt }
  ];

  const projectTabBody = `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>项目信息</h4><p class="section-caption">查看项目基础属性、阈值与时间信息</p></div>
      </div>
      ${renderGeneInfoGrid(projectInfo)}
    </section>
    <section class="gene-chart-grid">
      ${renderGeneChartCard("全基因组关联分析", renderGeneScatter(project.points), "以散点形式展示关联显著性分布")}
      ${renderGeneChartCard("P值分布情况", renderGeneHistogram(project.pValueBars), "观察各区段 P 值频次分布")}
      ${renderGeneChartCard("显著位点染色体分布情况", renderGeneChromosomeBars(project.chromosomeBars), "对比各染色体显著位点数量")}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>Top 10 SNP位点</h4><p class="section-caption">按照显著性排序展示关键位点</p></div>
      </div>
      ${renderGeneSnpTable(project.snps.slice(0, 10))}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>基因型组合预测</h4><p class="section-caption">给出推荐组合、预测产量与置信信息</p></div>
      </div>
      <div class="gene-predict-card">
        <div>
          <span>系统推荐组合</span>
          <strong>${escapeHtml(project.prediction.combo)}</strong>
        </div>
        <div>
          <span>预测产量</span>
          <strong>${escapeHtml(project.prediction.yield)}</strong>
        </div>
        <div>
          <span>置信区间</span>
          <strong>${escapeHtml(project.prediction.interval)}</strong>
        </div>
        <div>
          <span>置信度</span>
          <strong>${escapeHtml(project.prediction.confidence)}</strong>
        </div>
      </div>
    </section>
  `;

  const datasetTabBody = `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>数据信息</h4><p class="section-caption">查看数据集类型、规模与上传信息</p></div>
      </div>
      ${renderGeneInfoGrid(datasetInfo)}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>数据预览</h4><p class="section-caption">展示数据集前几行内容用于快速核验</p></div>
      </div>
      ${renderGeneDatasetPreview(dataset)}
    </section>
    <section class="gene-quality-grid">
      ${dataset.qualityStats
        .map(
          (item) => `
            <article class="gene-quality-card">
              <strong>${escapeHtml(item.value)}</strong>
              <span>${escapeHtml(item.label)}</span>
            </article>
          `
        )
        .join("")}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>位点质量分布</h4><p class="section-caption">展示位点质量统计柱状分布</p></div>
      </div>
      ${renderGeneHistogram(dataset.qualityBars)}
    </section>
  `;

  return renderGeneModalShell({
    title: "详情",
    sizeClass: "is-gene-large",
    body: `
      ${renderDetailHero({
        eyebrow: tab === "dataset" ? "数据信息" : "项目信息",
        title: project.name,
        description: tab === "dataset" ? "查看数据集属性、预览内容与质量分布。" : "查看项目属性、统计图谱与推荐基因型组合。",
        meta: [
          { value: project.strain },
          { value: project.phenotype },
          { value: project.method },
          { html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` }
        ]
      })}
      <div class="gene-tabs">
        <button class="gene-tab ${tab === "project" ? "is-active" : ""}" type="button" data-gene-tab="project">项目信息</button>
        <button class="gene-tab ${tab === "dataset" ? "is-active" : ""}" type="button" data-gene-tab="dataset">数据信息</button>
      </div>
      ${tab === "dataset" ? datasetTabBody : projectTabBody}
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="gene">关闭</button>
      <button class="modal-primary" type="button" data-gene-open="edit|${project.id}">编辑项目</button>
    `
  });
}

function openGeneModal(actionKey, projectId = "", extra = {}) {
  if (actionKey === "create") {
    state.modal = { type: "gene-create" };
    return;
  }

  if (actionKey === "detail") {
    state.modal = { type: "gene-detail", projectId, tab: extra.tab || "project" };
    return;
  }

  state.modal = { type: `gene-${actionKey}`, projectId, ...extra };
}

function getAnalysisRow(moduleKey, itemId) {
  return analysisPages[moduleKey].rows.find((row) => row.id === itemId) || null;
}

function renderAnalysisFormModal(moduleKey, mode, itemId = "") {
  if (moduleKey === "omics") {
    return renderOmicsFormModal(mode, itemId);
  }
  if (moduleKey === "process") {
    return renderProcessFormModal(mode, itemId);
  }
  if (moduleKey === "full") {
    return renderFullFormModal(mode, itemId);
  }
  if (moduleKey === "service") {
    return renderServiceFormModal(mode, itemId);
  }

  const config = analysisFormConfigs[moduleKey];
  const current = itemId ? getAnalysisRow(moduleKey, itemId) : null;

  return renderGeneModalShell({
    title: `${mode === "edit" ? "编辑" : "新增"}${config.title}`,
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${config.fields
          .map((field) =>
            renderAnalysisField({
              ...field,
              value:
                field.name === "statusText"
                  ? current?.status?.text || field.options?.[0] || ""
                  : current?.[field.name] || "",
              name: `analysis-${field.name}`
            })
          )
          .join("")}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|${moduleKey}|${itemId}">${mode === "edit" ? "保存修改" : "确认创建"}</button>
    `
  });
}

function renderAnalysisDetailModal(moduleKey, itemId) {
  if (moduleKey === "omics") {
    return renderOmicsDetailModal(itemId);
  }
  if (moduleKey === "process") {
    return renderProcessDetailModal(itemId);
  }
  if (moduleKey === "full") {
    return renderFullDetailModal(itemId);
  }
  if (moduleKey === "service") {
    return renderServiceDetailModal(itemId);
  }

  const row = getAnalysisRow(moduleKey, itemId);
  const page = analysisPages[moduleKey];
  if (!row) {
    return "";
  }

  const infoItems = page.columns
    .filter((column) => column.key !== "actions")
    .map((column) => ({
      label: column.label,
      value: column.key === "status" ? row.status.text : row[column.key]
    }));

  return renderGeneModalShell({
    title: `${page.title}详情`,
    sizeClass: "is-gene-form",
    body: `
      <section class="gene-section-card">
        <div class="gene-section-head">
          <h4>详细信息</h4>
        </div>
        ${renderGeneInfoGrid(infoItems)}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|${moduleKey}|${itemId}">编辑</button>
    `
  });
}

function renderAnalysisDeleteModal(moduleKey, itemId) {
  if (moduleKey === "omics") {
    return renderOmicsDeleteModal(itemId);
  }
  if (moduleKey === "process") {
    return renderProcessDeleteModal(itemId);
  }
  if (moduleKey === "full") {
    return renderFullDeleteModal(itemId);
  }
  if (moduleKey === "service") {
    return renderServiceDeleteModal(itemId);
  }

  const row = getAnalysisRow(moduleKey, itemId);
  if (!row) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定删除该记录吗？</h4>
        <p>${escapeHtml(row.name || row.code || itemId)}</p>
        <span>删除后将从数据库移除，刷新页面不会恢复。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|${moduleKey}|${itemId}">确认删除</button>
    `
  });
}

function openAnalysisModal(action, moduleKey, itemId = "") {
  if (action === "create" || action === "edit") {
    if (moduleKey === "service") {
      const current = itemId ? hydrateServiceItem(getAnalysisRow("service", itemId) || {}) : null;
      state.modal = {
        type: "analysis-form",
        mode: action,
        moduleKey,
        itemId,
        serviceMethod: action === "edit" ? "manual" : "file",
        serviceStep: 1,
        serviceDraft: buildServiceDraft(current)
      };
      return;
    }

    state.modal = { type: "analysis-form", mode: action, moduleKey, itemId };
    return;
  }

  if (action === "detail") {
    state.modal = { type: "analysis-detail", moduleKey, itemId };
    return;
  }

  if (action === "gpa-detail" || action === "predict-detail") {
    state.modal = { type: "full-linked-detail", moduleKey, itemId, detailType: action };
    return;
  }

  if (action === "delete") {
    state.modal = { type: "analysis-delete", moduleKey, itemId };
  }
}

function getGeneFormValues() {
  return [...document.querySelectorAll("[data-gene-field]")].reduce((result, node) => {
    result[node.dataset.geneField] = node.value.trim();
    return result;
  }, {});
}

function getAnalysisFormValues() {
  const result = [...document.querySelectorAll("[data-gene-field^='analysis-']")].reduce((acc, node) => {
    acc[node.dataset.geneField.replace("analysis-", "")] = node.value.trim();
    return acc;
  }, {});

  const moduleChecks = [...document.querySelectorAll("[data-analysis-module]")];
  if (moduleChecks.length) {
    result.modules = moduleChecks.filter((node) => node.checked).map((node) => node.dataset.analysisModule);
  }

  return result;
}

function getSensorFormValues(moduleKey) {
  return [...document.querySelectorAll(`[data-sensor-module="${moduleKey}"]`)].reduce((result, node) => {
    result[node.dataset.sensorField] = node.value.trim();
    return result;
  }, {});
}

async function submitGeneAction(action, projectId) {
  const values = getGeneFormValues();
  const current = projectId ? getGeneProject(projectId) : null;

  if (action === "create") {
    await apiRequest("/api/gene-projects", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        strain: values.strain,
        phenotype: values.phenotype,
        method: values.method,
        threshold: values.threshold,
        description: values.description,
        status: "分析中",
        samples: "0",
        sites: "0",
        dataset: {
          name: `${values.name || "未命名项目"}_数据集`,
          type: "VCF",
          size: "0 MB",
          sites: "0"
        }
      })
    });
  } else if (action === "save" && current) {
    await apiRequest(`/api/gene-projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...current,
        name: values.name,
        strain: values.strain,
        phenotype: values.phenotype,
        method: values.method,
        threshold: values.threshold,
        description: values.description
      })
    });
  } else if (action === "upload" && current) {
    await apiRequest(`/api/gene-projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...current,
        strain: values.strain || current.strain,
        dataset: {
          ...current.dataset,
          name: values.datasetName,
          type: values.datasetType,
          size: values.datasetSize || current.dataset.size,
          uploadedAt: new Date().toISOString().slice(0, 19).replace("T", " ")
        }
      })
    });
  } else if (action === "delete" && current) {
    await apiRequest(`/api/gene-projects/${projectId}`, {
      method: "DELETE"
    });
  }

  await loadGeneProjects();
}

async function submitAnalysisAction(action, moduleKey, itemId) {
  const values = getAnalysisFormValues();
  const current = itemId ? getAnalysisRow(moduleKey, itemId) : null;

  if (moduleKey === "omics") {
    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "omics",
          name: values.name,
          strain: values.strain,
          source: values.source,
          description: values.description,
          type: "基于基因组",
          reactions: "2,156",
          metabolites: "1,892",
          flux: "3.24",
          targetProduct: "乙酸",
          fileName: "model_v2.xml",
          statusText: "已验证",
          statusClass: "is-valid",
          createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({
          ...current,
          name: values.name,
          strain: values.strain,
          source: values.source,
          description: values.description,
          fileName: current.fileName || "model_v2.xml",
          type: current.type || "基于基因组",
          targetProduct: current.targetProduct || "乙酸",
          statusText: current.status?.text || "已验证",
          statusClass: current.status?.className || "is-valid"
        })
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (moduleKey === "process") {
    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "process",
          name: values.name,
          model: values.model,
          strain: values.strain,
          goal: values.goal,
          description: values.description,
          improvement: "+18.5%",
          paramCount: "24",
          currentYield: "85.2 g/L",
          optimizedYield: "100.9 g/L",
          confidenceRange: "98.5 - 103.3 g/L",
          statusText: "已完成",
          statusClass: "is-valid",
          createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({
          ...current,
          name: values.name,
          model: values.model,
          strain: values.strain,
          goal: values.goal,
          description: values.description,
          improvement: current.improvement || "+18.5%",
          paramCount: current.paramCount || "24",
          currentYield: current.currentYield || "85.2 g/L",
          optimizedYield: current.optimizedYield || "100.9 g/L",
          confidenceRange: current.confidenceRange || "98.5 - 103.3 g/L",
          statusText: current.status?.text || "已完成",
          statusClass: current.status?.className || "is-valid"
        })
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (moduleKey === "full") {
    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "full",
          name: values.name,
          strain: values.strain,
          description: values.description,
          modules: values.modules || [],
          targetProduct: "L-谷氨酸",
          patentRisk: "中等风险 共12项专利风险",
          statusText: "已完成",
          statusClass: "is-done",
          createdAt: new Date().toISOString().slice(0, 10),
          gpaSummary: fullProjectLibrary["full-1"].gpaSummary,
          processSummary: fullProjectLibrary["full-1"].processSummary
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({
          ...current,
          name: values.name,
          strain: values.strain,
          description: values.description,
          modules: values.modules || [],
          targetProduct: current.targetProduct || "L-谷氨酸",
          patentRisk: current.patentRisk || "中等风险 共12项专利风险",
          statusText: current.status?.text || "已完成",
          statusClass: current.status?.className || "is-done"
        })
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (moduleKey === "service") {
    const serviceValues = buildServicePayload(syncServiceDraftFromDom(), current);

    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "service",
          ...serviceValues,
          createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify(serviceValues)
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (action === "create") {
    await apiRequest("/api/analysis-items", {
      method: "POST",
      body: JSON.stringify({
        module: moduleKey,
        ...values,
        statusText: values.statusText,
        statusClass: statusTextToClass(values.statusText),
        createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
      })
    });
  } else if (action === "edit" && current) {
    await apiRequest(`/api/analysis-items/${itemId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...current,
        ...values,
        statusText: values.statusText,
        statusClass: statusTextToClass(values.statusText)
      })
    });
  } else if (action === "delete") {
    await apiRequest(`/api/analysis-items/${itemId}`, {
      method: "DELETE"
    });
  }

  await loadAnalysisModules();
}

function sensorStatusClass(moduleKey, metrics) {
  const numericValues = metrics
    .map((item) => Number(String(item.value).replace(/[^\d.-]/g, "")))
    .filter((value) => Number.isFinite(value));

  if (!numericValues.length) {
    return "is-normal";
  }

  const highRisk = moduleKey === "physical" ? numericValues.some((value) => value > 38 || value < 0.03) : numericValues.some((value) => value > 30);
  const warning = moduleKey === "physical" ? numericValues.some((value) => value > 37) : numericValues.some((value) => value > 18);

  if (highRisk) {
    return "is-error";
  }
  if (warning) {
    return "is-warning";
  }
  return "is-normal";
}

async function submitSensorAction(action, moduleKey) {
  const values = getSensorFormValues(moduleKey);
  const module = sensorModules[moduleKey];

  // 验证是否至少填写了一项参数
  const metricValues = module.paramFields
    .map((field, index) => ({
      label: field.label,
      value: values[`${moduleKey}-param-${index}`]
    }))
    .filter((item) => item.value);

  if (metricValues.length === 0) {
    throw new Error("请至少填写一项参数数据后再提交");
  }

  // 通过 label 查找录入人员和录入时间
  const basicFields = module.basicFields;
  const userField = basicFields.find(f => f.label === "录入人员");
  const timeField = basicFields.find(f => f.label === "录入时间");
  const userIndex = basicFields.indexOf(userField);
  const timeIndex = basicFields.indexOf(timeField);
  const user = userIndex >= 0 ? values[`${moduleKey}-basic-${userIndex}`] : "";
  const time = timeIndex >= 0 ? values[`${moduleKey}-basic-${timeIndex}`] : "";

  const statusClass = sensorStatusClass(moduleKey, metricValues);
  const statusText = statusClass === "is-error" ? "异常" : statusClass === "is-warning" ? "预警" : "正常";
  const record = {
    module: moduleKey,
    batchId: state.activeBatch[moduleKey],
    time,
    user,
    statusText,
    statusClass,
    metrics: metricValues.slice(0, 4).map((item) => ({
      label: item.label,
      value: item.value,
      tone: statusClass === "is-normal" ? "normal" : statusClass === "is-warning" ? "warning" : "error"
    })),
    detail: moduleKey === "physical" ? metricValues : [],
    detailCards: moduleKey === "biological" ? metricValues : []
  };

  const payload = await apiRequest("/api/sensor-records", {
    method: "POST",
    body: JSON.stringify(record)
  });

  mergeSensorRecord(moduleKey, payload.item);
  recalcSensorSummary(moduleKey);
}

function findRecord(moduleKey, batchId, recordId) {
  const module = sensorModules[moduleKey];
  const batch = module.batches.find((item) => item.id === batchId);
  const record = batch?.records.find((item) => item.id === recordId);
  return { module, batch, record };
}

function getThresholdStep(label) {
  if (label.includes("搅拌速度") || label.includes("溶解CO₂")) return '1';
  if (label.includes("排气CO₂")) return '0.01';
  return '0.1';
}

function getThresholdValue(moduleKey, label, field) {
  const savedConfig = state.thresholds[moduleKey];
  if (savedConfig) {
    const savedRow = savedConfig.find((row) => row.label === label);
    if (savedRow) {
      return savedRow[field] || "";
    }
  }
  const module = sensorModules[moduleKey];
  const defaultRow = module.thresholdRows.find((row) => row.label === label);
  return defaultRow ? defaultRow[field] : "";
}

function renderThresholdModal(module) {
  const rows = module.thresholdRows.map((row) => {
    const step = getThresholdStep(row.label);
    const min = getThresholdValue(module.key, row.label, "min");
    const max = getThresholdValue(module.key, row.label, "max");
    const alert = getThresholdValue(module.key, row.label, "alert");
    return `
      <tr>
        <td>${row.label}</td>
        <td><input class="config-input" type="number" step="${step}" value="${min}" data-threshold-field="min" data-threshold-label="${row.label}" /></td>
        <td><input class="config-input" type="number" step="${step}" value="${max}" data-threshold-field="max" data-threshold-label="${row.label}" /></td>
        <td><input class="config-input" type="number" step="${step}" value="${alert}" data-threshold-field="alert" data-threshold-label="${row.label}" /></td>
      </tr>
    `;
  });

  return `
    <div class="modal-layer">
      <section class="modal">
        <header class="modal-header">
          <h3 class="modal-title">
            <span class="modal-icon">${icon("i-settings")}</span>
            <span>${module.thresholdTitle}</span>
          </h3>
          <button class="modal-close" type="button" data-close-modal="threshold">
            <span class="header-icon">${icon("i-close")}</span>
          </button>
        </header>
        <div class="modal-body">
          <table class="config-table">
            <thead>
              <tr>
                <th>参数名称</th>
                <th>下限阈值</th>
                <th>上限阈值</th>
                <th>预警阈值</th>
              </tr>
            </thead>
            <tbody>
              ${rows.join("")}
            </tbody>
          </table>
          <div class="config-note">
            <span class="header-icon">${icon("i-warning")}</span>
            <span>提示: 预警阈值为数据接近上限/下限时提前提醒的界限</span>
          </div>
          <div class="modal-footer">
            <button class="modal-outline" type="button" data-modal-action="reset-threshold|${module.key}">恢复默认</button>
            <button class="modal-primary" type="button" data-modal-action="save-threshold|${module.key}">保存配置</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderImportModal(module) {
  const footer =
    module.importVariant === "confirm"
      ? `
        <div class="modal-footer is-between">
          <button class="download-button is-full" type="button" data-download-template="${module.key}">
            <span class="header-icon">${icon("i-download")}</span>
            <span>下载导入模板</span>
          </button>
        </div>
        <div class="modal-footer">
          <button class="modal-secondary" type="button" data-close-modal="import">取消</button>
          <button class="modal-primary" type="button" data-modal-action="confirm-import|${module.key}">确认导入</button>
        </div>
      `
      : `
        <div class="download-row">
          <button class="download-button" type="button" data-download-template="${module.key}">
            <span class="header-icon">${icon("i-download")}</span>
            <span>下载导入模板</span>
          </button>
        </div>
      `;

  return `
    <div class="modal-layer">
      <section class="modal">
        <header class="modal-header">
          <h3 class="modal-title">
            <span class="modal-icon">${icon("i-upload")}</span>
            <span>${module.importTitle}</span>
          </h3>
          <button class="modal-close" type="button" data-close-modal="import">
            <span class="header-icon">${icon("i-close")}</span>
          </button>
        </header>
        <div class="modal-body">
          <div class="upload-box">
            <div>
              <div class="upload-plus">+</div>
              <p class="upload-title">拖拽文件到此处或点击上传</p>
              <p class="upload-subtitle">支持格式: Excel(.xlsx), CSV(.csv) | 文件大小限制: 最大10MB</p>
            </div>
          </div>
          ${footer}
        </div>
      </section>
    </div>
  `;
}

function renderDetailModal(moduleKey, batchId, recordId) {
  const { module, batch, record } = findRecord(moduleKey, batchId, recordId);
  if (!module || !batch || !record) {
    return "";
  }

  const paramBody =
    moduleKey === "physical"
      ? `
        <div class="detail-param-grid">
          ${record.detail
            .map(
              (item) => `
                <div class="detail-param-item">
                  <p>${item.label}</p>
                  <p>${item.value}</p>
                </div>
              `
            )
            .join("")}
        </div>
      `
      : `
        <div class="detail-card-grid">
          ${record.detailCards
            .map(
              (item) => `
                <div class="detail-card-item">
                  <div class="detail-param-item">
                    <p>${item.label}</p>
                    <p>${item.value}</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      `;

  return `
    <div class="modal-layer">
      <section class="modal is-detail detail-modal">
        <div class="modal-body">
          <div class="detail-head">
            <h3 class="detail-title">${module.detailTitle}</h3>
            <button class="detail-close" type="button" data-close-modal="detail">
              <span class="header-icon">${icon("i-close")}</span>
            </button>
          </div>

          <div class="detail-block">
            <h4 class="detail-subtitle">基础信息</h4>
            <div class="detail-info-grid">
              <div class="detail-info-item">
                <p>批次号</p>
                <p>${batch.id}</p>
              </div>
              <div class="detail-info-item">
                <p>录入人员</p>
                <p>${record.user}</p>
              </div>
              <div class="detail-info-item">
                <p>录入时间</p>
                <p>${record.time}</p>
              </div>
              <div class="detail-info-item">
                <p>${moduleKey === "physical" ? "发酵周期" : "状态"}</p>
                <p>${moduleKey === "physical" ? batch.period : `<span class="status-chip ${record.statusClass}">${record.statusText}</span>`}</p>
              </div>
            </div>
          </div>

          <div class="detail-block">
            <h4 class="detail-subtitle">${moduleKey === "physical" ? "物理参数" : "代谢物参数"}</h4>
            ${paramBody}
          </div>

          <div class="detail-footer">
            <button class="modal-outline" type="button" data-close-modal="detail">关闭</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderModal() {
  if (!state.modal) {
    return "";
  }

  if (state.modal.type === "analysis-form") {
    return renderAnalysisFormModal(state.modal.moduleKey, state.modal.mode, state.modal.itemId);
  }

  if (state.modal.type === "analysis-detail") {
    return renderAnalysisDetailModal(state.modal.moduleKey, state.modal.itemId);
  }

  if (state.modal.type === "analysis-delete") {
    return renderAnalysisDeleteModal(state.modal.moduleKey, state.modal.itemId);
  }

  if (state.modal.type === "full-linked-detail") {
    return state.modal.detailType === "gpa-detail"
      ? renderFullGpaDetailModal(state.modal.itemId)
      : renderFullPredictDetailModal(state.modal.itemId);
  }

  if (state.modal.type === "gene-create") {
    return renderGeneFormModal("create");
  }

  if (state.modal.type === "gene-edit") {
    return renderGeneFormModal("edit", state.modal.projectId);
  }

  if (state.modal.type === "gene-upload") {
    return renderGeneUploadModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-delete") {
    return renderGeneDeleteModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-result") {
    return renderGeneResultModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-detail") {
    return renderGeneDetailModal(state.modal.projectId, state.modal.tab || "project");
  }

  if (state.modal.type === "threshold") {
    return renderThresholdModal(sensorModules[state.modal.module]);
  }

  if (state.modal.type === "import") {
    return renderImportModal(sensorModules[state.modal.module]);
  }

  if (state.modal.type === "detail") {
    return renderDetailModal(state.modal.module, state.modal.batchId, state.modal.recordId);
  }

  return "";
}

function renderDashboardView() {
  const page =
    isSensorMenu() && state.sensorView[state.activeMenu] === "form"
      ? {
          breadcrumb: sensorModules[state.activeMenu].formBreadcrumb,
          headerTools: true,
          content: renderSensorFormPage(sensorModules[state.activeMenu])
        }
      : isSensorMenu()
        ? {
            breadcrumb: sensorModules[state.activeMenu].listBreadcrumb,
            headerTools: true,
            content: renderSensorListPage(sensorModules[state.activeMenu])
          }
        : {
            breadcrumb: analysisPages[state.activeMenu].breadcrumb,
            headerTools: analysisPages[state.activeMenu].headerTools,
            content: renderAnalysisPage(analysisPages[state.activeMenu])
          };

  return `
    <section class="app-page">
      ${renderHeader(page)}
      <div class="page-content">${page.content}</div>
    </section>
    ${renderModal()}
  `;
}

function renderView() {
  viewRoot.innerHTML = state.scene === "auth" ? renderAuthView(state.authView) : renderDashboardView();
}

function renderApp() {
  renderSidebar();
  renderView();
  syncShellState();
}

function validateCaptcha(expected, actual) {
  return expected.toUpperCase() === actual.trim().toUpperCase();
}

function isStrongPassword(value) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,20}$/.test(value);
}

function passwordStrength(value) {
  let level = 0;
  if (value.length >= 8) {
    level = 1;
  }
  if (/[A-Za-z]/.test(value) && /\d/.test(value) && value.length >= 8) {
    level = 2;
  }
  if (/[A-Za-z]/.test(value) && /\d/.test(value) && /[^A-Za-z\d]/.test(value) && value.length >= 8) {
    level = 3;
  }
  return level;
}

function updateStrengthMeter(value) {
  const meter = document.querySelector("#strengthMeter");
  const text = document.querySelector("#strengthText");
  if (!meter || !text) {
    return;
  }

  const level = passwordStrength(value);
  [...meter.children].forEach((bar, index) => {
    bar.classList.toggle("is-on", index < level);
  });

  if (level === 0) {
    text.textContent = "S: 密码需包含字母、数字和特殊字符";
    text.style.color = "#ff5b5b";
  } else if (level === 1) {
    text.textContent = "强度较弱，请补充字母和数字组合";
    text.style.color = "#ff7a7a";
  } else if (level === 2) {
    text.textContent = "强度中等，建议再加入特殊字符";
    text.style.color = "#f39800";
  } else {
    text.textContent = "密码强度良好";
    text.style.color = "#20a653";
  }
}

function refreshCaptcha(key) {
  state.captchaCodes[key] = generateCaptcha();
  document.querySelectorAll(`[data-captcha-value="${key}"]`).forEach((node) => {
    node.textContent = state.captchaCodes[key];
  });
}

function resetSensorToList(menuKey) {
  if (isSensorMenu(menuKey)) {
    state.sensorView[menuKey] = "list";
    state.openNavGroup = "monitor";
    state.modal = null;
  }
}

function resetDashboardState() {
  state.activeMenu = "physical";
  state.openNavGroup = "monitor";
  state.sensorView.physical = "list";
  state.sensorView.biological = "list";
  state.activeBatch.physical = sensorModules.physical.batches[0].id;
  state.activeBatch.biological = sensorModules.biological.batches[0].id;
  state.statusFilter.physical = "all";
  state.statusFilter.biological = "all";
  state.pagination.physical = 1;
  state.pagination.biological = 1;
  state.pagination.gene = 1;
  state.pagination.omics = 1;
  state.pagination.process = 1;
  state.pagination.full = 1;
  state.pagination.service = 1;
  state.modal = null;
  state.sidebarOpen = false;
}

function logoutToAuth() {
  resetDashboardState();
  state.scene = "auth";
  state.authView = "login";
  state.authUser = null;
  renderApp();
  showToast("已退出系统，返回登录页面");
}

function handleLoginSubmit(form) {
  const data = new FormData(form);
  const account = String(data.get("account") || "").trim();
  const password = String(data.get("password") || "").trim();
  const captcha = String(data.get("captcha") || "").trim();

  if (!account || !password || !captcha) {
    showToast("请完整填写登录信息");
    return;
  }
  if (!validateCaptcha(state.captchaCodes.login, captcha)) {
    showToast("验证码不正确，请重新输入");
    refreshCaptcha("login");
    return;
  }

  state.scene = "dashboard";
  state.authUser = {
    name: account
  };
  resetDashboardState();
  renderApp();
  showToast("登录成功，已进入物理传感器页面");
}

function handleRegisterSubmit(form) {
  const data = new FormData(form);
  const username = String(data.get("username") || "").trim();
  const organization = String(data.get("organization") || "").trim();
  const password = String(data.get("password") || "").trim();
  const confirmPassword = String(data.get("confirmPassword") || "").trim();
  const captcha = String(data.get("captcha") || "").trim();
  const agreement = data.get("agreement");

  if (!username || !organization || !password || !confirmPassword || !captcha) {
    showToast("请完整填写注册信息");
    return;
  }
  if (!/^[A-Za-z0-9_]{4,20}$/.test(username)) {
    showToast("用户名需为4-20位字母、数字或下划线");
    return;
  }
  if (!isStrongPassword(password)) {
    showToast("密码需包含字母、数字和特殊字符");
    return;
  }
  if (password !== confirmPassword) {
    showToast("两次输入的密码不一致");
    return;
  }
  if (!validateCaptcha(state.captchaCodes.register, captcha)) {
    showToast("图片验证码不正确");
    refreshCaptcha("register");
    return;
  }
  if (!agreement) {
    showToast("请先同意用户服务协议和隐私政策");
    return;
  }

  state.authView = "login";
  renderApp();
  showToast("注册成功，请返回登录");
}

function handleRecoverSubmit(form) {
  const data = new FormData(form);
  const account = String(data.get("account") || "").trim();
  const password = String(data.get("password") || "").trim();
  const confirmPassword = String(data.get("confirmPassword") || "").trim();
  const captcha = String(data.get("captcha") || "").trim();

  if (!account || !password || !confirmPassword || !captcha) {
    showToast("请完整填写找回密码信息");
    return;
  }
  if (!validateCaptcha(state.captchaCodes.recover, captcha)) {
    showToast("验证码不正确，请重新输入");
    refreshCaptcha("recover");
    return;
  }
  if (!isStrongPassword(password)) {
    showToast("新密码强度不足");
    return;
  }
  if (password !== confirmPassword) {
    showToast("两次输入的新密码不一致");
    return;
  }

  state.authView = "login";
  renderApp();
  showToast("密码已重置，请重新登录");
}

document.addEventListener("click", async (event) => {
  const authViewButton = event.target.closest("[data-auth-view]");
  if (authViewButton) {
    state.authView = authViewButton.dataset.authView;
    renderApp();
    return;
  }

  const menuButton = event.target.closest("[data-menu]");
  if (menuButton) {
    state.activeMenu = menuButton.dataset.menu;
    state.openNavGroup = isSensorMenu(state.activeMenu) ? "monitor" : "";
    if (isSensorMenu(state.activeMenu)) {
      state.sensorView[state.activeMenu] = "list";
    }
    state.modal = null;
    state.sidebarOpen = false;
    renderApp();
    return;
  }

  const menuGroupButton = event.target.closest("[data-menu-group]");
  if (menuGroupButton) {
    const groupKey = menuGroupButton.dataset.menuGroup;
    state.openNavGroup = state.openNavGroup === groupKey ? "" : groupKey;
    renderApp();
    return;
  }

  const openFormButton = event.target.closest("[data-open-form]");
  if (openFormButton) {
    const moduleKey = openFormButton.dataset.openForm;
    state.activeMenu = moduleKey;
    state.openNavGroup = "monitor";
    state.sensorView[moduleKey] = "form";
    state.modal = null;
    renderApp();
    return;
  }

  const backListButton = event.target.closest("[data-back-list]");
  if (backListButton) {
    resetSensorToList(backListButton.dataset.backList);
    renderApp();
    return;
  }

  const batchButton = event.target.closest("[data-batch]");
  if (batchButton) {
    const [moduleKey, batchId] = batchButton.dataset.batch.split("|");
    state.activeBatch[moduleKey] = batchId;
    state.pagination[moduleKey] = 1;
    renderApp();
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    const [key, page] = pageButton.dataset.page.split("|");
    state.pagination[key] = Number(page) || 1;
    renderApp();
    return;
  }

  const openModalButton = event.target.closest("[data-open-modal]");
  if (openModalButton) {
    const [type, moduleKey, batchId, recordId] = openModalButton.dataset.openModal.split("|");
    state.modal =
      type === "detail"
        ? { type, module: moduleKey, batchId, recordId }
        : { type, module: moduleKey };
    renderApp();
    return;
  }

  const closeModalButton = event.target.closest("[data-close-modal]");
  if (closeModalButton) {
    state.modal = null;
    renderApp();
    return;
  }

  const authActionButton = event.target.closest("[data-auth-action]");
  if (authActionButton?.dataset.authAction === "logout") {
    logoutToAuth();
    return;
  }

  const geneOpenButton = event.target.closest("[data-gene-open]");
  if (geneOpenButton) {
    const [actionKey, projectId] = geneOpenButton.dataset.geneOpen.split("|");
    openGeneModal(actionKey, projectId);
    renderApp();
    return;
  }

  const analysisOpenButton = event.target.closest("[data-analysis-open]");
  if (analysisOpenButton) {
    const [actionKey, moduleKey, itemId] = analysisOpenButton.dataset.analysisOpen.split("|");
    openAnalysisModal(actionKey, moduleKey, itemId);
    renderApp();
    return;
  }

  const serviceUploadTrigger = event.target.closest("[data-service-upload-trigger]");
  if (serviceUploadTrigger && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    document.querySelector("[data-service-file-input]")?.click();
    return;
  }

  const serviceMethodButton = event.target.closest("[data-service-method]");
  if (serviceMethodButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    syncServiceDraftFromDom();
    state.modal = {
      ...state.modal,
      serviceMethod: serviceMethodButton.dataset.serviceMethod,
      serviceStep: serviceMethodButton.dataset.serviceMethod === "manual" ? state.modal.serviceStep || 1 : 1
    };
    renderApp();
    return;
  }

  const serviceStepButton = event.target.closest("[data-service-step]");
  if (serviceStepButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    syncServiceDraftFromDom();
    state.modal = {
      ...state.modal,
      serviceMethod: "manual",
      serviceStep: Number(serviceStepButton.dataset.serviceStep) || 1
    };
    renderApp();
    return;
  }

  const serviceNavButton = event.target.closest("[data-service-nav]");
  if (serviceNavButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    const currentStep = state.modal.serviceStep || 1;
    syncServiceDraftFromDom();
    state.modal = {
      ...state.modal,
      serviceMethod: "manual",
      serviceStep:
        serviceNavButton.dataset.serviceNav === "prev"
          ? Math.max(1, currentStep - 1)
          : Math.min(4, currentStep + 1)
    };
    renderApp();
    return;
  }

  const serviceImportButton = event.target.closest("[data-service-import]");
  if (serviceImportButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    if (!state.modal.serviceImportContent || !state.modal.serviceImportFileName) {
      showToast("请先选择要导入的文件");
      return;
    }

    try {
      const payload = await apiRequest("/api/analysis-import/service", {
        method: "POST",
        body: JSON.stringify({
          fileName: state.modal.serviceImportFileName,
          fileSize: state.modal.serviceImportSize,
          fileContent: state.modal.serviceImportContent
        })
      });
      await loadAnalysisModules();
      state.modal = null;
      renderApp();
      showToast(
        `导入完成：新增 ${payload.createdCount || 0} 条，更新 ${payload.updatedCount || 0} 条${
          payload.failedCount ? `，失败 ${payload.failedCount} 条` : ""
        }`
      );
    } catch (error) {
      showToast(error.message || "导入失败");
    }
    return;
  }

  const geneTabButton = event.target.closest("[data-gene-tab]");
  if (geneTabButton && state.modal?.type === "gene-detail") {
    state.modal = { ...state.modal, tab: geneTabButton.dataset.geneTab };
    renderApp();
    return;
  }

  const geneSubmitButton = event.target.closest("[data-gene-submit]");
  if (geneSubmitButton) {
    const [action, projectId] = geneSubmitButton.dataset.geneSubmit.split("|");
    const project = projectId ? getGeneProject(projectId) : null;
    const messageMap = {
      create: "分析项目已创建",
      save: "项目修改已保存",
      upload: project ? `${project.name} 数据集已保存` : "数据集已保存",
      delete: project ? `${project.name} 已删除` : "项目已删除"
    };
    try {
      await submitGeneAction(action, projectId);
      state.modal = null;
      renderApp();
      showToast(messageMap[action] || "操作已完成");
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const analysisSubmitButton = event.target.closest("[data-analysis-submit]");
  if (analysisSubmitButton) {
    if (state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
      syncServiceDraftFromDom();
    }
    const [action, moduleKey, itemId] = analysisSubmitButton.dataset.analysisSubmit.split("|");
    const row = itemId ? getAnalysisRow(moduleKey, itemId) : null;
    const messageMap = {
      create: `${analysisPages[moduleKey].title}记录已创建`,
      edit: `${analysisPages[moduleKey].title}记录已保存`,
      delete: row ? `${row.name || row.code} 已删除` : "记录已删除"
    };
    try {
      await submitAnalysisAction(action, moduleKey, itemId);
      state.modal = null;
      renderApp();
      showToast(messageMap[action] || "操作已完成");
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const headerTool = event.target.closest("[data-header-tool]");
  if (headerTool) {
    const labelMap = {
      search: "搜索",
      filter: "筛选",
      settings: "设置"
    };
    showToast(`${labelMap[headerTool.dataset.headerTool]}功能入口已预留`);
    return;
  }

  const primaryAction = event.target.closest("[data-primary-action]");
  if (primaryAction) {
    if (primaryAction.dataset.primaryAction === "gene") {
      openGeneModal("create");
      renderApp();
      return;
    }
    if (persistedAnalysisModules.includes(primaryAction.dataset.primaryAction)) {
      openAnalysisModal("create", primaryAction.dataset.primaryAction);
      renderApp();
      return;
    }
    showToast(`已打开“${primaryAction.dataset.primaryAction}”的新建流程入口`);
    return;
  }

  const filterAction = event.target.closest("[data-filter-action]");
  if (filterAction) {
    const [action, pageKey] = filterAction.dataset.filterAction.split("|");
    showToast(action === "search" ? `${analysisPages[pageKey].title}筛选已执行` : "筛选条件已重置");
    return;
  }

  const tableAction = event.target.closest("[data-table-action]");
  if (tableAction) {
    const [pageKey, actionKey, targetId] = tableAction.dataset.tableAction.split("|");
    if (pageKey === "gene") {
      openGeneModal(actionKey, targetId);
      renderApp();
      return;
    }
    if (persistedAnalysisModules.includes(pageKey)) {
      openAnalysisModal(actionKey === "view" ? "detail" : actionKey, pageKey, targetId);
      renderApp();
      return;
    }
    showToast(`${tableAction.textContent.trim()}：${targetId}`);
    return;
  }

  const modalAction = event.target.closest("[data-modal-action]");
  if (modalAction) {
    const [action, moduleKey] = modalAction.dataset.modalAction.split("|");

    if (action === "save-threshold") {
      const rows = document.querySelectorAll(".config-table tbody tr");
      const config = [];
      rows.forEach((row) => {
        const label = row.querySelector("td:first-child").textContent.trim();
        const min = row.querySelector('[data-threshold-field="min"]')?.value || "";
        const max = row.querySelector('[data-threshold-field="max"]')?.value || "";
        const alert = row.querySelector('[data-threshold-field="alert"]')?.value || "";
        config.push({ label, min, max, alert });
      });

      apiRequest("/api/sensor-thresholds", {
        method: "POST",
        body: JSON.stringify({ module: moduleKey, config })
      });

      state.thresholds[moduleKey] = config;
      state.modal = null;
      renderApp();
      showToast("阈值配置已保存");
      return;
    }

    const actionText = {
      "reset-threshold": "已恢复默认阈值",
      "confirm-import": moduleKey === "physical" ? "物理参数数据已导入" : "代谢物数据已导入"
    };

    if (action === "reset-threshold") {
      state.thresholds[moduleKey] = null;
      apiRequest("/api/sensor-thresholds", {
        method: "POST",
        body: JSON.stringify({ module: moduleKey, config: null })
      });
      renderApp();
      showToast(actionText[action]);
      return;
    }

    state.modal = null;
    renderApp();
    showToast(actionText[action] || "操作已完成");
    return;
  }

  const formAction = event.target.closest("[data-form-action]");
  if (formAction) {
    const [action, moduleKey] = formAction.dataset.formAction.split("|");
    if (action === "reset") {
      showToast("表单已重置");
      return;
    }
    try {
      await submitSensorAction(action, moduleKey);
      state.sensorView[moduleKey] = "list";
      renderApp();
      showToast(action === "save" ? "录入内容已保存到系统" : "录入数据已提交到系统");
    } catch (error) {
      showToast(error.message || "录入失败");
    }
    return;
  }

  const downloadButton = event.target.closest("[data-download-template]");
  if (downloadButton) {
    showToast(`已下载${sensorModules[downloadButton.dataset.downloadTemplate].label}导入模板`);
    return;
  }

  const togglePasswordButton = event.target.closest("[data-toggle-password]");
  if (togglePasswordButton) {
    const input = document.querySelector(`#${togglePasswordButton.dataset.togglePassword}`);
    if (!input) {
      return;
    }

    const nextType = input.type === "password" ? "text" : "password";
    input.type = nextType;
    togglePasswordButton.innerHTML = `<span class="header-icon">${icon(nextType === "password" ? "i-eye-off" : "i-eye")}</span>`;
    return;
  }

  const refreshButton = event.target.closest("[data-refresh-captcha]");
  if (refreshButton) {
    refreshCaptcha(refreshButton.dataset.refreshCaptcha);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#loginForm")) {
    event.preventDefault();
    handleLoginSubmit(event.target);
    return;
  }
  if (event.target.matches("#registerForm")) {
    event.preventDefault();
    handleRegisterSubmit(event.target);
    return;
  }
  if (event.target.matches("#recoverForm")) {
    event.preventDefault();
    handleRecoverSubmit(event.target);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-strength-input]")) {
    updateStrengthMeter(event.target.value);
    return;
  }

  if (event.target.matches("[data-service-field]") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    state.modal = {
      ...state.modal,
      serviceDraft: {
        ...createServiceEmptyDraft(),
        ...(state.modal.serviceDraft || {}),
        [event.target.dataset.serviceField]: event.target.value.trim()
      }
    };
  }
});

document.addEventListener("change", async (event) => {
  const statusFilterSelect = event.target.closest("[data-status-filter]");
  if (statusFilterSelect) {
    const moduleKey = statusFilterSelect.dataset.statusFilter;
    state.statusFilter[moduleKey] = statusFilterSelect.value;
    state.pagination[moduleKey] = 1;
    renderApp();
    return;
  }

  if (event.target.matches("[data-service-field]") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    state.modal = {
      ...state.modal,
      serviceDraft: {
        ...createServiceEmptyDraft(),
        ...(state.modal.serviceDraft || {}),
        [event.target.dataset.serviceField]: event.target.value.trim()
      }
    };
    return;
  }

  if (event.target.matches("[data-service-file-input]") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    const [file] = [...(event.target.files || [])];
    if (!file) {
      return;
    }

    const extension = `.${String(file.name).split(".").pop() || ""}`.toLowerCase();
    if (![".csv", ".xlsx", ".xls"].includes(extension)) {
      showToast("仅支持上传 .csv、.xlsx、.xls 文件");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      showToast("文件大小不能超过 50MB");
      return;
    }

    try {
      const base64 = await readFileAsBase64(file);
      state.modal = {
        ...state.modal,
        serviceImportFileName: file.name,
        serviceImportSize: file.size,
        serviceImportContent: base64
      };
      renderApp();
      showToast(`已选择文件：${file.name}`);
    } catch (error) {
      showToast(error.message || "文件读取失败");
    }
  }
});

window.addEventListener("resize", () => {
  if (!isMobileViewport()) {
    state.sidebarOpen = false;
  }
  syncShellState();
});

mobileMenuButton.addEventListener("click", () => {
  setSidebarOpen(!state.sidebarOpen);
});

sidebarBackdrop.addEventListener("click", () => {
  setSidebarOpen(false);
});

["login", "register", "recover"].forEach((key) => {
  state.captchaCodes[key] = generateCaptcha();
});

renderApp();
Promise.all([loadGeneProjects(), loadAnalysisModules(), loadSensorRecords(), loadSensorThresholds()])
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error(error);
    showToast("系统数据加载失败");
  });
