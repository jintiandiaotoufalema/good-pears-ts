export interface ThrottleConfig {
    /**
     * 节流间隔
     */
    delay?: number
    /**
     * 只触发最后一次
     */
    triggerLast?: boolean
}

/**
 * 事件节流
 * @example
 * document.body.addEventListener("wheel", eventThrottle((event) => {}));
 */
export const eventThrottle = function(fn: Function, config?:ThrottleConfig){
    const _config = Object.assign({
        delay: 20,
        triggerLast: false
    }, config||{});
    let scan:any = false;

    return function(this:any, ...arg:any){
        if(!scan){
            scan = setTimeout(() => {
                scan = false;
                _config.triggerLast && fn.call(this, ...arg);
            }, _config.delay);
            _config.triggerLast || fn.call(this, ...arg);
        }else{
            (arg[0] instanceof Event) && arg[0].preventDefault()
            if(_config.triggerLast) {
                clearTimeout(scan);
                setTimeout(() => {
                    scan = false;
                    fn.call(this, ...arg);
                }, _config.delay);
            }
        }
    }
};

/**
 * 节流
 * @module throttle
 * @author Iktsuarpok
 * @version 1.0
 */