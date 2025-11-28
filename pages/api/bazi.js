export default function handler(req, res) {
  // 强制设置响应头
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  const query = req.query || {};
  const { year, month, day, hour } = query;

  const params = {
    year: typeof year === 'string' ? year.trim() : String(year),
    month: typeof month === 'string' ? month.trim() : String(month),
    day: typeof day === 'string' ? day.trim() : String(day),
    hour: typeof hour === 'string' ? hour.trim() : String(hour),
  };

  if (!params.year || !params.month || !params.day || !params.hour) {
    return res.status(400).json({
      error: '请提供 year, month, day, hour 参数（不能为空）'
    });
  }

  try {
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