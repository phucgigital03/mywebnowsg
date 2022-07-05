function Validation(value, event) {
    let messages;
    const rules = event.target.getAttribute('rules');
    const arrrules = rules.split('|');
    const name = event.target.getAttribute('name');
    const objHandleRule = {};
    const objRules = {
        required(value) {
            return value ? undefined : 'Vui long nhap truong nay';
        },
        email(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Truong nay phai la email';
        },
        min(min) {
            return (value) => {
                return value.length >= min ? undefined : 'PassWord toi thieu 7 ki tu';
            };
        },
    };
    for (const rule of arrrules) {
        let funcRule = objRules[rule];
        if (rule.includes(':')) {
            const ruleEle = rule.split(':');
            funcRule = objRules[ruleEle[0]](Number(ruleEle[1]));
        }

        if (Array.isArray(objHandleRule[name])) {
            objHandleRule[name].push(funcRule);
        } else {
            objHandleRule[name] = [funcRule];
        }
    }
    const lengthFunc = objHandleRule[name].length;
    for (let i = 0; i < lengthFunc; ++i) {
        messages = objHandleRule[name][i](value);
        if (messages) {
            break;
        }
    }

    if (messages) {
        return messages;
    }
    return undefined;
}

export default Validation;
