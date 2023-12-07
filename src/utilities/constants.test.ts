import {describe, expect, test} from '@jest/globals';
import { averageRating } from './constants';

describe('Ensure average rating function rounds to one decimal place', () => {
    test("Pass an example array that averages 4.75, ensure 4.8 returns instead.", () => {

        expect(averageRating([7,3,4,5])).toBe(4.8);
    })
} )
