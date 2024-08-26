export default class
{
    public Date:any
    public timestamp:number = 0

    constructor(date:string)
    {
        if (date == "now"){
            this.Date = new Date()
        }else if (date){
            this.Date = new Date(date)
        }else{
            this.Date = null
        }
    }

    /**
     * 指定日時移動させる
     */
    public changeDate(type:string, number:number) : void
    {
        if (type == "month"){
            //月の加減
            this.Date.setMonth(this.Date.getMonth() + number)
        }

        if (type == "day"){
            //日の加減
            this.Date.setDate(this.Date.getDate() + number)
        }
        if (type == "hour"){
            //時の加減
            this.Date.setHours(this.Date.getHours() + number)
        }
        if (type == "min"){
            //分の加減
            this.Date.setMinutes(this.Date.getMinutes() + number)
        }

    }


    /**
     * 年月日時間の配列の取得
     */
    public getDateList(type:string, yearType:string="all", minUnit:number=30)
    {

        let min:number = 0
        let max:number = 0
        let plus:number = 1

        if (type == "year"){
            min = parseInt(this.date("Y")) - 90
            max = 0

            if (yearType == "all"){
                max = parseInt(this.date("Y")) + 2
            }
        }

        if (type == "month"){
            min = 1;max=12;
        }
        if (type == "day"){
            min = 1;max=31;
        }
        if (type == "hour"){
            min = 0;max=24;
        }
        if (type == "min"){
            min = 0;max=50;
            plus = minUnit
        }
        if (type == "sec"){
            min = 0;max=50;
            plus = 10
        }

        let results:any = []
        for (var i:number = min; i <= max; i+=plus){
            results.push({id:sprintf("%02d", i),value:sprintf("%02d", i)})
        }


        return results
    }

    /**
     * 年月日時間の名称
     */
    public getDateName(type:string) : string
    {
        let result:string = ""

        result = type == "year" ? "年" : result
        result = type == "month" ? "月" : result
        result = type == "day" ? "日" : result
        result = type == "hour" ? "時" : result
        result = type == "min" ? "分" : result
        result = type == "sec" ? "秒" : result

        return result
    }



    /**
     * 日付フォーマット
     * @param txt
     * @param d
     */
    public date(txt:string)
    {
        if (!this.Date){
            return ""
        }

        const weeks = ["日", "月", "火", "水", "木", "金", "土"]
        const dgt = ({m, n}: { m: any, n: any }) => ('0000' + m).substr(-n);
        const arr = [
            {k: 'Y', v: this.Date.getFullYear()},
            {k: 'y', v: (this.Date.getYear() - 100)}
            ,{k: 'wa', v: this.Date.getFullYear() - 2018}
            ,{k: 'YY',   v: dgt({m: this.Date.getFullYear(), n: 2})}
            ,{k: 'm',   v: dgt({m: this.Date.getMonth() + 1, n: 2})}
            ,{k: 'M',    v: this.Date.getMonth() + 1}
            ,{k: 'd',   v: dgt({m: this.Date.getDate(), n: 2})}
            ,{k: 'D',    v: this.Date.getDate()}
            ,{k: 'H',   v: dgt({m: this.Date.getHours(), n: 2})}
            ,{k: 'h',    v: this.Date.getHours()}
            ,{k: 'it',   v: () => {

                let min:String = String(Math.round( this.Date.getMinutes() / 10) * 10)

                if (min == "60"){
                    min = "50";
                }
                if (!min){
                    min = "00";
                }

                return min;
            }}
            ,{k: 'i',   v: dgt({m: this.Date.getMinutes(), n: 2})}
            ,{k: 'I',    v: this.Date.getMinutes()}
            ,{k: 's',   v: dgt({m: this.Date.getSeconds(), n: 2})}
            ,{k: 'S',    v: this.Date.getSeconds()}
            ,{k: 'w',    v: this.Date.getDay()}
            ,{k: 'W',    v: weeks[this.Date.getDay()]}
            ,{k: 't',    v: new Date(this.Date.getFullYear(), this.Date.getMonth() + 1, 0).getDate()}
            ,{k: 'T',    v: this.Date.getTime()}
        ];

        arr.forEach(x => {txt = txt.replace(x.k, x.v)});


        return txt;
    }

    public calcStartChangeToEnd(startDatetime:string, endDatetime:string, newDatetime:string)
    {
        let startTime:number = new Date(startDatetime).getTime()
        let endTime:number = new Date(endDatetime).getTime()
        let newTime:number = new Date(newDatetime).getTime()


        let resultDate:Date = new Date(newTime + (endTime - startTime))


        return resultDate.getFullYear() + "-" + sprintf("%02d", String(resultDate.getMonth() + 1)) + "-" + sprintf("%02d", String(resultDate.getDate())) +
            " " + sprintf("%02d", String(resultDate.getHours())) + ":" + sprintf("%02d", String(resultDate.getMinutes())) + ":00"

    }

    public calc(startDatetime:string, endDatetime:string, calcType:string="plus", type:string="time")
    {
        if (type == "time"){
            let startTime:number = new Date("2020-01-01 " + startDatetime).getTime() / 1000
            let endTime:number = new Date("2020-01-01 " + endDatetime).getTime() / 1000

            let time:number = 0

            if (calcType == "minus"){
                time = endTime - startTime
            }else{
                let minTime:number = new Date("2020-01-01 00:00:00").getTime() / 1000
                time = (endTime - minTime) + (startTime - minTime)
            }

            if (isFinite(time)){
                let hour:string = sprintf("%02d", String(parseInt(String(time / 3600))))
                let min:string = sprintf("%02d", String(parseInt(String(time % 3600 / 60))))

                return {hour:hour, min:min, sec:"00"}
            }else{
                return {hour:"00", min:"00", sec:"00"}
            }

        }

    }

    public plus(dateTimeTo:string, type:string="time")
    {
        if (type == "time"){
            let Dates:Date = new Date("2020-01-01 " + dateTimeTo)
            let Dates2:Date = new Date("2020-01-01 00:00:00")
            let time:number = Dates.getTime() - Dates2.getTime()

            this.Date = new Date(this.Date.getTime() + time)
        }

    }

    public before(datetime:string)
    {
        let EndDate:Date = new Date(datetime);
        let marge:number = ((EndDate.getTime())- parseInt(this.date("T"))) / 1000;

        if (marge < 0){
            marge  = marge * -1;
        }

        if (marge < 60){
            return marge + "秒";
        }
        if (marge < 3600){
            return String(Math.floor(marge / 60)) + "分";
        }
        if (marge < 86400){
            return String(Math.floor(marge / 3600)) + "時間" + Math.floor(((marge % 3600) / 60)) + "分";
        }

        return String(Math.floor(marge / 86400)) + "日" + Math.floor(((marge % 86400) / 3600)) + "時間";

    }



}
