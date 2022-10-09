export function getRandomPhrase() {
  const phraseList = [
    // 没有人可以回到过去重新开始，但每一个人都可以从现在开始创造全新的未来。
    'Nobody can go back and start a new beginning, but anyone can start today and make a new ending.',
    // 一个人如果太焦急着到达终点，那他就无法感受到旅途中的愉悦。
    'When you run so fast to get somewhere, you miss the fun of getting there.',
    // 信念，就是即使看不到长阶通向何方，却仍愿意迈出第一步。
    "Faith is taking the first step even when you don't see the whole staircase.",
    // 不管是一飞冲天还是跌入谷底，至少，你尝试过！
    'Whether you fail or fly, at least you tried.',
    // 生如夏花之灿烂，死如秋叶之静美。
    'Let life be beautiful like summer flowers and death like autumn leaves.',
    // 不管生活有多不容易，你都要守住自己的那一份优雅。
    "Throughout life's complications, you should maintain such a sense of elegance.",
    // 世间最美好的感受，就是发现自己的心在笑。
    'The best feeling in the world is when you know your heart is smiling.',
    // 拥有你美丽的爱情，太阳就永远明媚。
    'With the wonder of your love, the sun above always shines.',
    // 偶尔要回头看看，否则永远都在追寻，而不知道自己失去了什么。
    'Sometimes you need to look back, otherwise you will never know what you have lost in the way of forever searching.',
    // 我有个很奇葩的自尊问题，在某些方面我既恨自己不够好，又觉得自己比任何人都好。
    "I have this weird self esteem problem where I hate myself yet, I still think I'm better than everyone.",
    // 你现在的气质里，藏着你走过的路，读过的书和爱过的人。
    'In your present temperament, hide the path you have traveled, the books you have read and the people you have loved.',
    // 遍历山河，人间值得。
    'Traversing mountains and rivers, the world is worth.',
    // 跟随自己的心，但要保持清醒的头脑。
    'Follow your heart, but take your brain with you.',
    // 愿你的生命中有足够的云翳，来造成一个美丽的黄昏。
    'May there be enough clouds in your life to make a beautiful sunset.',
    // 幸福是良好的健康加上糟糕的记忆。
    'Happiness is good health and a bad memory.',
    // 盐于律己，甜以待人。
    'Salt is for self — discipline, sweet for others.',
    // 独行的人总会遇到有趣的人。
    'People who walk alone always meet interseting people.',
    // 生活就像一盒巧克力，结果往往出人意料。
    'Life was like a box of chocolates, you never know what you are gonna get.',
    // 今天我为你做了顿丰盛的早餐，一杯关心，一碟幸福，一勺平和，一叉信任，还有一碗祈福。
    'I have a special breakfast for you today, a glass of care, a plate ofhappiness, a spoon of peace, a fork of trust and a bowl of prayer.',
  ];
  return phraseList[Math.floor(phraseList.length * Math.random())];
}
