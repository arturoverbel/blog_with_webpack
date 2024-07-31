import { compact } from 'lodash';

export default function bar() {
    const array = compact([0, 1, false, 2, '', 3]);
    console.log(array);
}