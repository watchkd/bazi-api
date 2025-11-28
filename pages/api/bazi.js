export default function handler(req, res) {
  // 安全获取 query 参数：防止 req.query 为 undefined 或 null
  const query = req.query || {};
  const { year, month, day, hour } = query;

  // 转换为字符串并去除空格（兼容数字或带空格的输入）
  const params = {
    year: typeof year === 'string' ? year.trim() : String(year),
    month: typeof month === 'string' ? month.trim() : String(month),
    day: typeof day === 'string' ? day.trim() : String(day),
    hour: typeof hour === 'string' ? hour.trim() : String(hour),
  };

  // 检查是否为空（包括空字符串）
  if (!params.year || !params.month || !params.day || !params.hour) {
    return res.status(400).json({
      error: '请提供 year, month, day, hour 参数（不能为空）'
    });
  }

  // 成功响应
  res.status(200).json({
    message: "恭喜！API 已成功运行！",
    input: params
  });
}