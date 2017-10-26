
module.exports = () => {
    const tool = mnm => {

        tool.i = 0; // iterations counter

        const len = mnm.length, half = Math.floor(len / 2);

        tool.l = len;

        let l, k, mod, t, pattern = '';

        for (l = 1 ; l <= len ; l += 1) {

            if (l > half) {

                return 1;
            }

            pattern += mnm[l - 1];

            for (k = l ; k < len ; k += 1) {

                mod = k % l || 0;

                tool.i += 1;

                if (pattern[mod] !== mnm[k]) {

                    break;
                }
            }

            if (k === len) {

                t = len / l;

                if (t === parseInt(t, 10)) {

                    return t;
                }
            }
        }
    }

    return tool;
}