/**
 * @param {import("./types").PluginProps} props
 */
module.exports = ({ config, battlefield }) => {
  let index = 0

  const sendMessage = () => {
    let message
    if(config.randomOrder) {
      message = config.messages[Math.floor(Math.random() * config.messages.length)];
    } else {
      message = config.messages[index]
      index = (index + 1) % config.messages.length
    }
    battlefield.say(message, ["all"])
  }

  if(config.messages.length !== 0) {
    let interval = config.interval * 1000
    if(interval < 10000) interval = 10000
    setInterval(() => sendMessage(), interval) 
  }
}
