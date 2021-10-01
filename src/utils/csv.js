const regExp = /^[0-9]+$/
const operationCode = ['A', 'D']

function check(csv) {

    return new Promise((resolve, reject) => {
        let hasError = false
        var reader = new FileReader();
        reader.readAsText(csv);

        //if you need to read a csv file with a 'ISO-8859-1' encoding
        /*reader.readAsText(file,'ISO-8859-1');*/

        //When the file finish load
        reader.onload = function (event) {

            //get the file.
            var csv = event.target.result;

            csv = csv.replace('(\r\n|\r)', '\n')
            var rows = csv.split('\n');

            if (rows.length - 1 > 60000) {
                reject({ errorCode: '200', errorMessage: 'Total records cannot more than 60,000' })
            }

            console.log(rows.length)
            //move line by line
            for (var i = 0; i < rows.length - 1; i++) {
                if (!hasError) {

                    // console.log(rows[i])
                    //split by separator (,) and get the columns
                    let cols = rows[i].split(',');
                    let line_num = i + 1


                    // console.log(rows.findIndex(x => x.split(',')[0].trim()===cols[0].trim()))


                    if (cols.length !== 2) {
                        // hasError=true
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: csv format incorrect` })
                    }
                    else if (!cols[0] || !cols[1]) {
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: csv format incorrect` })
                    }
                    else if (cols[0].length>30) {
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Country Prefix Max 30 characters is allowed` })
                    }
                    else if(cols[0].includes(' ')){
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Country Prefix shall be numeric.` })
                    }
                    else if(typeof cols[0]!=='number'){
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Country Prefix shall be numeric.` })
                    }else if(cols[1].includes(' ')){
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Charge Unit shall be numeric.` })
                    }
                    else if(typeof cols[1]!=='number'){
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Charge Unit shall be numeric.` })
                    }
                    else if( cols[1]>60||cols[1]<1){
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Charge Unit shall be 1 - 60.` })
                    }
                    else if (!regExp.test(cols[0].trim())) {
                        hasError = true
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}:Country Prefix shall be numeric.` })
                    }
                    else if (rows.findIndex(x => x.split(',')[0].trim() === cols[0].trim()) < i && rows.findIndex(x => x.split(',')[0].trim() === cols[0].trim()) !== -1) {
                        hasError = true
                        // console.log(i)
                        // console.log(rows.findIndex(x => x.trim()===cols[0].trim()))
                        console.log(`Line ${line_num}:  Duplcated Country Prefix.`)
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}:  Duplcated Country Prefix.` })
                    }
                    else if(typeof cols[2]!=='number'){
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Charge Price shall be numeric.` })
                    }
                    else if (cols[2].countDecimals()>2) {
                        hasError = true
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}:Max Decimal Places of Charge Price  is 2.` })
                    }
                    else if (!operationCode.includes(cols[3].trim())) {
                        hasError = true
                        // cols[1] = decodeURIComponent(cols[1].trim())
                        // console.log('value', cols[1])
                        // console.log('array', operationCode)
                        // console.log('include', operationCode.includes(cols[1].toUpperCase()))
                        // for(let code of operationCode) {
                        //     code = decodeURIComponent(code)
                        //     console.log('code', code)
                        //     console.log('compare 0', code, cols[1], code === cols[1])
                        //     console.log('compare 1', 'A', cols[1], 'A' === cols[1])
                        //     console.log('compare 2', code, 'A', code === 'A')
                        // }
                        console.log(`Line ${line_num}: Action must be A or D.`)
                        reject({ errorCode: '200', errorMessage: `Line ${line_num}: Action must be A or D.` })
                    }

                }
            }

            if (!hasError) {
                resolve({ errorCode: '000', errorMessage: `` })
            }
        }
    })


}


Number.prototype.countDecimals = function () {

    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
}


export default {
    check,
}