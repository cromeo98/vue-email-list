const app = new Vue(
    {
        el: '#root',
        data: {
            eMailList: [

            ]
        },
        mounted() {
            // axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (result){
            //     console.log(result);
            // }) 
            // -------OR-------
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(result => {
                    this.eMailList.push(result.data.response);
                })
            }
            console.log(this.eMailList);

        }
    }
);