export default function handler(req, res) {
  // 强制设置 Content-Type
  res.setHeader('Content-Type', 'application/json');

  // 安全获取 query 参数
  const query = req.query || {};
  const { year, month, day, hour } = query;

  // 转换为字符串并清理
  const params = {
    year: typeof year === 'string' ? year.trim() : String(year),
    month: typeof month === 'string' ? month.trim() : String(month),
    day: typeof day === 'string' ? day.trim() : String(day),
    hour: typeof hour === 'string' ? hour.trim() : String(hour),
  };

  // 验证必填字段
  if (!params.year || !params.month || !params.day || !params.hour) {
    return res.status(400).json({
      error: '请提供 year, month, day, hour 参数（不能为空）'
    });
  }

  try {
    // 成功响应
    res.status(200).json({
      message: "恭喜！API 已成功运行！",
      input: params
    });
  } catch (error) {
    console.error('API 错误:', error);
    res.status(500).json({
      error: '服务器内部错误',
      details: error.message
    });
  }
}