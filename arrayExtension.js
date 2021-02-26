(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let nArr = [];
        for (let a = n; a < this.length; a++) {
            nArr.push(this[a]);
        }
        return nArr;
    };
    Array.prototype.take = function (n) {
        let nArrT = [];
        for (let b = 0; b < n; b++) {
            nArrT.push(this[b]);
        }
        return nArrT;
    }
    Array.prototype.sum = function () {
        let sum = 0;
        for (let c = 0; c < this.length; c++) {
            sum += this[c];
        }
        return sum;

    }
    Array.prototype.average = function () {
        let avr = this.sum() / this.length;
        return avr;
    }
})();