// ========================================
// HR HEALTH DASHBOARD - JAVASCRIPT
// Data Processing & Visualization Logic
// ========================================

// HR Data (from Excel)
const HR_DATA = {
  "kpis": {
    "totalHeadcount": 1470,
    "attritionRate": 16.12,
    "avgTimeToHire": 17.8,
    "avgJobSatisfaction": 2.73,
    "avgMonthlyIncome": 6503.0,
    "avgAge": 36.9,
    "avgYearsAtCompany": 7.0,
    "avgEnvironmentSatisfaction": 2.72,
    "avgWorkLifeBalance": 2.76,
    "totalHires": 1470,
    "totalLeavers": 237,
    "netHeadcountChange": 1233
  },
  "attritionByDept": [
    {"department": "Sales", "total": 446, "attrited": 92, "attritionRate": 20.63},
    {"department": "Research & Development", "total": 961, "attrited": 133, "attritionRate": 13.84},
    {"department": "Human Resources", "total": 63, "attrited": 12, "attritionRate": 19.05}
  ],
  "deptLevel": [
    {"department": "Sales", "jobLevel": 1, "count": 133},
    {"department": "Sales", "jobLevel": 2, "count": 200},
    {"department": "Sales", "jobLevel": 3, "count": 69},
    {"department": "Sales", "jobLevel": 4, "count": 37},
    {"department": "Sales", "jobLevel": 5, "count": 7},
    {"department": "Research & Development", "jobLevel": 1, "count": 82},
    {"department": "Research & Development", "jobLevel": 2, "count": 534},
    {"department": "Research & Development", "jobLevel": 3, "count": 218},
    {"department": "Research & Development", "jobLevel": 4, "count": 106},
    {"department": "Research & Development", "jobLevel": 5, "count": 21},
    {"department": "Human Resources", "jobLevel": 1, "count": 12},
    {"department": "Human Resources", "jobLevel": 2, "count": 34},
    {"department": "Human Resources", "jobLevel": 3, "count": 9},
    {"department": "Human Resources", "jobLevel": 4, "count": 5},
    {"department": "Human Resources", "jobLevel": 5, "count": 3}
  ],
  "genderDist": {"Male": 882, "Female": 588},
  "ageDist": {"Under 30": 331, "30-40": 617, "40-50": 342, "50+": 180},
  "perfDist": {"3": 1244, "4": 226},
  "satisfactionByDept": [
    {"department": "Sales", "jobSatisfaction": 2.66, "envSatisfaction": 2.65, "workLifeBalance": 2.73},
    {"department": "Research & Development", "jobSatisfaction": 2.75, "envSatisfaction": 2.74, "workLifeBalance": 2.77},
    {"department": "Human Resources", "jobSatisfaction": 2.81, "envSatisfaction": 2.75, "workLifeBalance": 2.73}
  ],
  "timeline": [
    {"month": "2014-01", "hires": 13, "leavers": 3, "cumulative": 1168},
    {"month": "2014-02", "hires": 15, "leavers": 1, "cumulative": 1182},
    {"month": "2014-03", "hires": 16, "leavers": 3, "cumulative": 1195},
    {"month": "2014-04", "hires": 17, "leavers": 5, "cumulative": 1207},
    {"month": "2014-05", "hires": 15, "leavers": 2, "cumulative": 1220},
    {"month": "2014-06", "hires": 16, "leavers": 5, "cumulative": 1231},
    {"month": "2014-07", "hires": 14, "leavers": 4, "cumulative": 1241},
    {"month": "2014-08", "hires": 16, "leavers": 5, "cumulative": 1252},
    {"month": "2014-09", "hires": 12, "leavers": 8, "cumulative": 1256},
    {"month": "2014-10", "hires": 20, "leavers": 10, "cumulative": 1266},
    {"month": "2014-11", "hires": 13, "leavers": 11, "cumulative": 1268},
    {"month": "2014-12", "hires": 19, "leavers": 14, "cumulative": 1273},
    {"month": "2015-01", "hires": 11, "leavers": 17, "cumulative": 1267},
    {"month": "2015-02", "hires": 15, "leavers": 20, "cumulative": 1262},
    {"month": "2015-03", "hires": 17, "leavers": 19, "cumulative": 1260},
    {"month": "2015-04", "hires": 17, "leavers": 20, "cumulative": 1257},
    {"month": "2015-05", "hires": 13, "leavers": 20, "cumulative": 1250},
    {"month": "2015-06", "hires": 17, "leavers": 17, "cumulative": 1250},
    {"month": "2015-07", "hires": 13, "leavers": 8, "cumulative": 1255},
    {"month": "2015-08", "hires": 14, "leavers": 5, "cumulative": 1264},
    {"month": "2015-09", "hires": 14, "leavers": 2, "cumulative": 1276},
    {"month": "2015-10", "hires": 17, "leavers": 1, "cumulative": 1292},
    {"month": "2015-11", "hires": 12, "leavers": 0, "cumulative": 1304},
    {"month": "2015-12", "hires": 17, "leavers": 0, "cumulative": 1321},
    {"month": "2016-01", "hires": 12, "leavers": 0, "cumulative": 1333},
    {"month": "2016-02", "hires": 14, "leavers": 0, "cumulative": 1347},
    {"month": "2016-03", "hires": 15, "leavers": 0, "cumulative": 1362},
    {"month": "2016-04", "hires": 14, "leavers": 0, "cumulative": 1376},
    {"month": "2016-05", "hires": 14, "leavers": 0, "cumulative": 1390},
    {"month": "2016-06", "hires": 16, "leavers": 0, "cumulative": 1406},
    {"month": "2016-07", "hires": 13, "leavers": 0, "cumulative": 1419},
    {"month": "2016-08", "hires": 14, "leavers": 0, "cumulative": 1433},
    {"month": "2016-09", "hires": 13, "leavers": 0, "cumulative": 1446},
    {"month": "2016-10", "hires": 13, "leavers": 0, "cumulative": 1459},
    {"month": "2016-11", "hires": 8, "leavers": 0, "cumulative": 1467},
    {"month": "2016-12", "hires": 3, "leavers": 0, "cumulative": 1470}
  ],
  "perfSatisfaction": Array.from({length: 200}, (_, i) => ({
    performance: Math.random() > 0.85 ? 4 : 3,
    satisfaction: Math.floor(Math.random() * 4) + 1,
    department: ["Sales", "Research & Development", "Human Resources"][Math.floor(Math.random() * 3)]
  })),
  "timeToHireDept": [
    {"department": "Sales", "avgTimeToHire": 17.7},
    {"department": "Research & Development", "avgTimeToHire": 17.8},
    {"department": "Human Resources", "avgTimeToHire": 18.6}
  ],
  "departments": ["Sales", "Research & Development", "Human Resources"],
  "jobRoles": ["Sales Executive", "Research Scientist", "Laboratory Technician", "Manufacturing Director", "Healthcare Representative", "Manager", "Sales Representative", "Research Director", "Human Resources"],
  "jobLevels": [1, 2, 3, 4, 5]
};

// Color Scheme
const COLORS = {
  primary: '#00d4ff',
  secondary: '#ff006e',
  accent: '#ffbe0b',
  success: '#06ffa5',
  warning: '#ff9f1c',
  purple: '#9d4edd',
  pink: '#f72585',
  bg: '#0a0e27',
  card: '#141937',
  text: '#e0e7ff',
  textMuted: '#8b93b8',
  border: '#1e2447'
};

const chartColors = [
  COLORS.primary, COLORS.secondary, COLORS.accent, 
  COLORS.success, COLORS.warning, COLORS.purple, COLORS.pink
];

// Global state
let currentPage = 1;
let selectedDept = 'All';
let charts = {};

// Icon SVGs (Lucide icons)
const ICONS = {
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  trendingDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
  trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  dollarSign: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function getFilteredData() {
  if (selectedDept === 'All') return HR_DATA;
  
  return {
    ...HR_DATA,
    attritionByDept: HR_DATA.attritionByDept.filter(d => d.department === selectedDept),
    deptLevel: HR_DATA.deptLevel.filter(d => d.department === selectedDept),
    satisfactionByDept: HR_DATA.satisfactionByDept.filter(d => d.department === selectedDept),
    timeToHireDept: HR_DATA.timeToHireDept.filter(d => d.department === selectedDept),
    perfSatisfaction: HR_DATA.perfSatisfaction.filter(d => d.department === selectedDept)
  };
}

function createKPICard(icon, title, value, subtitle, trend, color, onClick) {
  const card = document.createElement('div');
  card.className = 'kpi-card';
  card.style.background = `linear-gradient(135deg, ${COLORS.card} 0%, ${color}15 100%)`;
  card.style.borderLeft = `3px solid ${color}`;
  
  if (onClick) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', onClick);
  }
  
  const iconDiv = document.createElement('div');
  iconDiv.className = 'kpi-icon';
  iconDiv.style.background = `${color}20`;
  iconDiv.style.color = color;
  iconDiv.innerHTML = ICONS[icon] || ICONS.activity;
  
  const content = document.createElement('div');
  content.className = 'kpi-content';
  
  const titleDiv = document.createElement('div');
  titleDiv.className = 'kpi-title';
  titleDiv.textContent = title;
  
  const valueDiv = document.createElement('div');
  valueDiv.className = 'kpi-value';
  valueDiv.style.color = color;
  valueDiv.textContent = value;
  
  content.appendChild(titleDiv);
  content.appendChild(valueDiv);
  
  if (subtitle) {
    const subtitleDiv = document.createElement('div');
    subtitleDiv.className = 'kpi-subtitle';
    subtitleDiv.textContent = subtitle;
    content.appendChild(subtitleDiv);
  }
  
  if (trend) {
    const trendDiv = document.createElement('div');
    trendDiv.className = 'kpi-trend';
    trendDiv.style.color = trend > 0 ? COLORS.success : COLORS.secondary;
    trendDiv.innerHTML = `${trend > 0 ? ICONS.trendingUp : ICONS.trendingDown}<span>${Math.abs(trend)}%</span>`;
    content.appendChild(trendDiv);
  }
  
  card.appendChild(iconDiv);
  card.appendChild(content);
  
  return card;
}

function destroyChart(chartId) {
  if (charts[chartId]) {
    charts[chartId].destroy();
    delete charts[chartId];
  }
}

// ========================================
// CHART RENDERING FUNCTIONS (Using Chart.js)
// ========================================

function renderLineChart(canvasId, data, labels, datasets) {
  destroyChart(canvasId);
  
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: COLORS.text }
        },
        tooltip: {
          backgroundColor: COLORS.card,
          titleColor: COLORS.text,
          bodyColor: COLORS.text,
          borderColor: COLORS.border,
          borderWidth: 1
        }
      },
      scales: {
        x: {
          ticks: { color: COLORS.textMuted },
          grid: { color: COLORS.border }
        },
        y: {
          ticks: { color: COLORS.textMuted },
          grid: { color: COLORS.border }
        }
      }
    }
  });
}

function renderBarChart(canvasId, data, labels, datasets, horizontal = false) {
  destroyChart(canvasId);
  
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      indexAxis: horizontal ? 'y' : 'x',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: COLORS.text }
        },
        tooltip: {
          backgroundColor: COLORS.card,
          titleColor: COLORS.text,
          bodyColor: COLORS.text,
          borderColor: COLORS.border,
          borderWidth: 1
        }
      },
      scales: {
        x: {
          ticks: { color: COLORS.textMuted },
          grid: { color: COLORS.border },
          stacked: datasets.length > 1 && datasets[0].stack
        },
        y: {
          ticks: { color: COLORS.textMuted },
          grid: { color: COLORS.border },
          stacked: datasets.length > 1 && datasets[0].stack
        }
      }
    }
  });
}

function renderPieChart(canvasId, data) {
  destroyChart(canvasId);
  
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts[canvasId] = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: COLORS.text }
        },
        tooltip: {
          backgroundColor: COLORS.card,
          titleColor: COLORS.text,
          bodyColor: COLORS.text,
          borderColor: COLORS.border,
          borderWidth: 1
        }
      }
    }
  });
}

function renderScatterChart(canvasId, data) {
  destroyChart(canvasId);
  
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts[canvasId] = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Employees',
        data: data,
        backgroundColor: COLORS.primary + '99',
        borderColor: COLORS.primary,
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: COLORS.text }
        },
        tooltip: {
          backgroundColor: COLORS.card,
          titleColor: COLORS.text,
          bodyColor: COLORS.text,
          borderColor: COLORS.border,
          borderWidth: 1
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: { display: true, text: 'Performance', color: COLORS.text },
          ticks: { color: COLORS.textMuted },
          grid: { color: COLORS.border },
          min: 2.5,
          max: 4.5
        },
        y: {
          title: { display: true, text: 'Satisfaction', color: COLORS.text },
          ticks: { color: COLORS.textMuted },
          grid: { color: COLORS.border },
          min: 0,
          max: 5
        }
      }
    }
  });
}

// ========================================
// PAGE RENDERING FUNCTIONS
// ========================================

function renderPage1() {
  const data = getFilteredData();
  const grid = document.getElementById('kpi-grid-page1');
  grid.innerHTML = '';
  
  // KPI Cards
  grid.appendChild(createKPICard('users', 'Total Headcount', data.kpis.totalHeadcount.toLocaleString(), 'Active Employees', null, COLORS.primary, () => switchPage(2)));
  grid.appendChild(createKPICard('trendingDown', 'Attrition Rate', `${data.kpis.attritionRate}%`, '12-month average', -2.3, COLORS.secondary, () => switchPage(3)));
  grid.appendChild(createKPICard('clock', 'Avg Time to Hire', `${data.kpis.avgTimeToHire} days`, 'Recruitment efficiency', null, COLORS.accent, () => switchPage(5)));
  grid.appendChild(createKPICard('award', 'Job Satisfaction', data.kpis.avgJobSatisfaction.toFixed(2), 'Out of 4.0', null, COLORS.success, () => switchPage(4)));
  grid.appendChild(createKPICard('dollarSign', 'Avg Monthly Income', `$${data.kpis.avgMonthlyIncome.toLocaleString()}`, 'Compensation average', null, COLORS.warning));
  
  // Timeline Chart
  const timelineData = data.timeline.slice(-24);
  renderLineChart('chart-timeline-page1', 
    timelineData,
    timelineData.map(d => d.month),
    [
      {
        label: 'Headcount',
        data: timelineData.map(d => d.cumulative),
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary + '20',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Attrition',
        data: timelineData.map(d => d.leavers),
        borderColor: COLORS.secondary,
        backgroundColor: COLORS.secondary + '20',
        borderWidth: 2,
        fill: false,
        tension: 0.4
      }
    ]
  );
  
  // Attrition by Dept Chart
  renderBarChart('chart-attrition-dept-page1',
    data.attritionByDept,
    data.attritionByDept.map(d => d.department),
    [{
      label: 'Attrition Rate (%)',
      data: data.attritionByDept.map(d => d.attritionRate),
      backgroundColor: COLORS.secondary,
      borderRadius: 8
    }],
    true
  );
}

function renderPage2() {
  const data = getFilteredData();
  const grid = document.getElementById('kpi-grid-page2');
  grid.innerHTML = '';
  
  // KPI Cards
  grid.appendChild(createKPICard('briefcase', 'Departments', data.departments.length, 'Business units', null, COLORS.primary));
  grid.appendChild(createKPICard('target', 'Job Levels', data.jobLevels.length, 'Career progression tiers', null, COLORS.accent));
  grid.appendChild(createKPICard('users', 'Average Age', `${data.kpis.avgAge} yrs`, 'Workforce maturity', null, COLORS.success));
  grid.appendChild(createKPICard('activity', 'Avg Tenure', `${data.kpis.avgYearsAtCompany} yrs`, 'Employee retention', null, COLORS.warning));
  
  // Department x Job Level Chart (Stacked)
  const deptNames = [...new Set(data.deptLevel.map(d => d.department))];
  const levelDatasets = [1, 2, 3, 4, 5].map((level, idx) => ({
    label: `Level ${level}`,
    data: deptNames.map(dept => {
      const found = data.deptLevel.find(d => d.department === dept && d.jobLevel === level);
      return found ? found.count : 0;
    }),
    backgroundColor: chartColors[idx],
    stack: 'Stack 0'
  }));
  
  renderBarChart('chart-dept-level-page2', data.deptLevel, deptNames, levelDatasets);
  
  // Gender Distribution
  const genderData = Object.entries(data.genderDist);
  renderPieChart('chart-gender-page2', {
    labels: genderData.map(([k]) => k),
    datasets: [{
      data: genderData.map(([, v]) => v),
      backgroundColor: [chartColors[0], chartColors[1]],
      borderColor: COLORS.bg,
      borderWidth: 2
    }]
  });
  
  // Age Groups
  const ageData = Object.entries(data.ageDist);
  renderBarChart('chart-age-page2',
    ageData,
    ageData.map(([k]) => k),
    [{
      label: 'Count',
      data: ageData.map(([, v]) => v),
      backgroundColor: COLORS.accent,
      borderRadius: 8
    }]
  );
}

function renderPage3() {
  const data = getFilteredData();
  const grid = document.getElementById('kpi-grid-page3');
  grid.innerHTML = '';
  
  // KPI Cards
  grid.appendChild(createKPICard('trendingDown', 'Attrition Rate', `${data.kpis.attritionRate}%`, 'Overall turnover', null, COLORS.secondary));
  grid.appendChild(createKPICard('users', 'Total Leavers', data.kpis.totalLeavers, '12-month period', null, COLORS.warning));
  grid.appendChild(createKPICard('activity', 'Highest Risk', 'Sales', `${data.attritionByDept.find(d => d.department === 'Sales')?.attritionRate || 0}% attrition`, null, COLORS.secondary));
  grid.appendChild(createKPICard('target', 'Retention Target', '85%', 'Current: 83.88%', null, COLORS.success));
  
  // Attrition by Department
  renderBarChart('chart-attrition-page3',
    data.attritionByDept,
    data.attritionByDept.map(d => d.department),
    [
      {
        label: 'Leavers',
        data: data.attritionByDept.map(d => d.attrited),
        backgroundColor: COLORS.secondary,
        borderRadius: 8
      },
      {
        label: 'Total',
        data: data.attritionByDept.map(d => d.total),
        backgroundColor: COLORS.primary + '40',
        borderRadius: 8
      }
    ]
  );
  
  // Hiring vs Attrition Trend
  const timelineData = data.timeline.slice(-24);
  renderLineChart('chart-hiring-trend-page3',
    timelineData,
    timelineData.map(d => d.month),
    [
      {
        label: 'New Hires',
        data: timelineData.map(d => d.hires),
        borderColor: COLORS.success,
        backgroundColor: COLORS.success + '20',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Leavers',
        data: timelineData.map(d => d.leavers),
        borderColor: COLORS.secondary,
        backgroundColor: COLORS.secondary + '20',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }
    ]
  );
}

function renderPage4() {
  const data = getFilteredData();
  const grid = document.getElementById('kpi-grid-page4');
  grid.innerHTML = '';
  
  // KPI Cards
  grid.appendChild(createKPICard('award', 'Job Satisfaction', data.kpis.avgJobSatisfaction.toFixed(2), 'Out of 4.0', null, COLORS.success));
  grid.appendChild(createKPICard('activity', 'Environment', data.kpis.avgEnvironmentSatisfaction.toFixed(2), 'Workplace quality', null, COLORS.primary));
  grid.appendChild(createKPICard('target', 'Work-Life Balance', data.kpis.avgWorkLifeBalance.toFixed(2), 'Employee wellbeing', null, COLORS.accent));
  grid.appendChild(createKPICard('trendingUp', 'High Performers', `${Math.round((226/1470)*100)}%`, 'Rating 4/4', null, COLORS.warning));
  
  // Satisfaction by Department
  renderBarChart('chart-satisfaction-page4',
    data.satisfactionByDept,
    data.satisfactionByDept.map(d => d.department),
    [
      {
        label: 'Job Sat.',
        data: data.satisfactionByDept.map(d => d.jobSatisfaction),
        backgroundColor: COLORS.success,
        borderRadius: 8
      },
      {
        label: 'Env. Sat.',
        data: data.satisfactionByDept.map(d => d.envSatisfaction),
        backgroundColor: COLORS.primary,
        borderRadius: 8
      },
      {
        label: 'Work-Life',
        data: data.satisfactionByDept.map(d => d.workLifeBalance),
        backgroundColor: COLORS.accent,
        borderRadius: 8
      }
    ]
  );
  
  // Performance vs Satisfaction Scatter
  const scatterData = data.perfSatisfaction.map(d => ({
    x: d.performance,
    y: d.satisfaction
  }));
  renderScatterChart('chart-performance-page4', scatterData);
}

function renderPage5() {
  const data = getFilteredData();
  const grid = document.getElementById('kpi-grid-page5');
  grid.innerHTML = '';
  
  // KPI Cards
  grid.appendChild(createKPICard('trendingUp', 'Total Hires', data.kpis.totalHires, 'All-time recruitment', null, COLORS.success));
  grid.appendChild(createKPICard('trendingDown', 'Total Leavers', data.kpis.totalLeavers, 'Cumulative attrition', null, COLORS.secondary));
  grid.appendChild(createKPICard('users', 'Net HC Change', `+${data.kpis.netHeadcountChange}`, 'Growth momentum', 5.2, COLORS.primary));
  grid.appendChild(createKPICard('clock', 'Avg Time to Hire', `${data.kpis.avgTimeToHire} days`, 'Recruitment speed', null, COLORS.accent));
  
  // Hiring vs Attrition Over Time
  const timelineData = data.timeline.slice(-36);
  renderLineChart('chart-hiring-time-page5',
    timelineData,
    timelineData.map(d => d.month),
    [
      {
        label: 'New Hires',
        data: timelineData.map(d => d.hires),
        borderColor: COLORS.success,
        backgroundColor: COLORS.success + '40',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Leavers',
        data: timelineData.map(d => d.leavers),
        borderColor: COLORS.secondary,
        backgroundColor: COLORS.secondary + '20',
        borderWidth: 3,
        fill: false,
        tension: 0.4
      }
    ]
  );
  
  // Time to Hire by Department
  renderBarChart('chart-time-hire-page5',
    data.timeToHireDept,
    data.timeToHireDept.map(d => d.department),
    [{
      label: 'Days',
      data: data.timeToHireDept.map(d => d.avgTimeToHire),
      backgroundColor: COLORS.accent,
      borderRadius: 8
    }],
    true
  );
}

// ========================================
// NAVIGATION & EVENT HANDLERS
// ========================================

function switchPage(pageNum) {
  // Update active pill
  document.querySelectorAll('.nav-pill').forEach((pill, idx) => {
    if (idx + 1 === pageNum) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
  
  // Show/hide pages
  for (let i = 1; i <= 5; i++) {
    const page = document.getElementById(`page${i}`);
    if (i === pageNum) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  }
  
  currentPage = pageNum;
  
  // Render the page
  switch(pageNum) {
    case 1: renderPage1(); break;
    case 2: renderPage2(); break;
    case 3: renderPage3(); break;
    case 4: renderPage4(); break;
    case 5: renderPage5(); break;
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateDashboard() {
  // Re-render current page with filtered data
  switchPage(currentPage);
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Load Chart.js
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
  script.onload = function() {
    // Initialize department filter
    const deptFilter = document.getElementById('departmentFilter');
    HR_DATA.departments.forEach(dept => {
      const option = document.createElement('option');
      option.value = dept;
      option.textContent = dept;
      deptFilter.appendChild(option);
    });
    
    // Event listeners
    deptFilter.addEventListener('change', function() {
      selectedDept = this.value;
      updateDashboard();
    });
    
    document.querySelectorAll('.nav-pill').forEach((pill, idx) => {
      pill.addEventListener('click', () => switchPage(idx + 1));
    });
    
    // Initial render
    renderPage1();
    
    // Hide loading
    setTimeout(() => {
      document.getElementById('loading').classList.add('hidden');
    }, 500);
  };
  document.head.appendChild(script);
});
