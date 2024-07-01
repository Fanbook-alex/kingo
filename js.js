import { Bot, ChannelType } from 'fanbook-api-node-sdk';

const YOUR_BOT_TOKEN = 'db0e7066dd788e33ff47e6e7b861eb83b9eae0dc6a1ed07da4dd88a917a7308ba6fbf69e9c46ba10394ce3ed30303a20';
const TARGET_CHANNEL = BigInt('642629042419658752');

const bot = new Bot(YOUR_BOT_TOKEN);
const bus = await bot.listen();

console.log('Service started');
bus.on('push', async (data) => {
  if (data.channel_type !== ChannelType.DMChannel) return; // 非私聊，不处理
  const content = JSON.parse(data.content);
  if (content.contentType !== 0) return; // 非纯文本，不处理
  try {
    const res = await bot.sendMessage(TARGET_CHANNEL, content.text, data.desc);
    console.log(`Forwarded ${data.message_id} -> ${res.message_id}`);
  } catch (e) {
    console.error(`Failed to forward message ${data.message_id}:`, e);
  }
});import { Bot, ChannelType } from 'fanbook-api-node-sdk';

const YOUR_BOT_TOKEN = '在此填入你的机器人令牌';
const TARGET_CHANNEL = BigInt('在此填入转发到的频道 ID');

const bot = new Bot(YOUR_BOT_TOKEN);
const bus = await bot.listen();

console.log('Service started');
bus.on('push', async (data) => {
  if (data.channel_type !== ChannelType.DMChannel) return; // 非私聊，不处理
  const content = JSON.parse(data.content);
  if (content.contentType !== 0) return; // 非纯文本，不处理
  try {
    const res = await bot.sendMessage(TARGET_CHANNEL, content.text, data.desc);
    console.log(`Forwarded ${data.message_id} -> ${res.message_id}`);
  } catch (e) {
    console.error(`Failed to forward message ${data.message_id}:`, e);
  }
});
