// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

function pAequorFactory(num, arr) {
    const pAequor = {
        _specimenNum: num,
        _dna: arr,
        mutate() {
            const randIndex = Math.floor(Math.random() * this._dna.length);
            const oldBase = this._dna[randIndex];
            const newBase = returnRandBase();
            if (oldBase !== newBase) {
                this._dna[randIndex] = newBase;
            }
        },
        compareDNA(other) {
            let count = 0;
            for (let i = 0; i < this._dna.length; i++) {
                if (this._dna[i] === other._dna[i]) {
                    count++;
                }
            }
            const similarFrac = (count / this._dna.length) * 100;
            console.log(
                `Specimen ${this._specimenNum} and Specimen ${other._specimenNum} have DNA that is ${similarFrac.toPrecision(3)}% similar.`,
            );
        },
    };
    return pAequor;
}

const org1 = pAequorFactory(1, mockUpStrand());
const org2 = pAequorFactory(2, mockUpStrand());
console.log(org1._dna.join(" "));
console.log(org2._dna.join(" "));
org1.compareDNA(org2);

// STEP 6 CODECADEMY CONTINUE
