const { countPureEmotionMsg } = require('./utils.js');
const { MobileQQ_s60v3_type_消息 } = require('../../../../../../src/components/Msg/source/MobileQQ/os/s60v3/types.js');

function qq_mobile_s60v3(m) {
    switch (m.type) {
        case MobileQQ_s60v3_type_消息: {
            // 可以有文件不存在
            return countPureEmotionMsg(m.content);
        }
        default:
            return null;
    }
}

module.exports = { qq_mobile_s60v3 };
