/* @flow */

import { getActiveElement } from './dom';

describe('dom utils', () => {
    describe('getActiveElement', () => {
        it('returns the active element', () => {
            const input1 = document.createElement('input');
            const input2 = document.createElement('input');

            input1.focus();

            expect(getActiveElement()).toBe(input1);

            input2.focus();

            expect(getActiveElement()).toBe(input2);
        });
    });
});
