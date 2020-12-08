// fetch('{url}/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// const a = [
//     { "key": 'value' },
//     {
//         "key": [
//             { "key": 'value' },
//         ]
//     }
// ]


// get , delete : parms
// post,put,patch : FormData
// url/?name="asd"&id=3

import Axios from 'axios'
import url from './Config'

export const showMessage = (status, type, message) => {
    // server side
    // Success
    // Error

    // client side
    // Info (item added to cart)
    // Warning (Validation)

    // if status code = 401 then go to login page

    if (type === 'success') {
        console.log("Success :", message)
        alert("Success : " + message)
        return 0
    }
    if (type === 'error') {
        console.log("Error :", message)
        alert(message)
        return 0
    }
}

// export const api_get_data = async () => {
//     await Axios.get(url + '/todos/1')
//         .then(response => {
//             return response
//         })
//         .catch(error => {
//             return error
//         })
//     // var config = {
//     //     method: 'get',
//     //     url: url + '/todos/1',
//     // };
//     // Axios(config)
//     //     .then(function (response) {
//     //         console.log(JSON.stringify(response.data));
//     //     })
//     //     .catch(function (error) {
//     //         showMessage("hellow ")
//     //         console.log("ERRRRRR", error);
//     //     });

// }

export const api_get_data = async (api) => {
    console.log(api)
    var data = [];

    var config = {
        method: 'get',
        //url: url + api + "ads",
        url: url + api,

        // headers: { 
        //   'Authorization': 'Token 8879108bfa0aa71dac4f4d249007f2304d73ba20', 
        // },
        // validateStatus: () => true
    };

    await Axios(config)
        .then(function (response) {
            data.push(response.data);
            // console.log(response)
            showMessage(response.status, 'success', "api call ok")
        })
        .catch(function (error) {
            // console.log(typeof (error));
            // console.log(JSON.stringify(error));
            // console.log(error.message);
            // console.log("Statys ", error.status);

            // if (error.response) {
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            // }

            showMessage(error.response.status, "error", JSON.stringify(error.message))

        });
    return (data[0]);

}

export const api_post_data = async (api, formData) => {
    console.log(formData)
    var data = [];

    var config = {
        method: 'post',
        url: url + api,
        // headers: { 
        //   'Authorization': 'Token 8879108bfa0aa71dac4f4d249007f2304d73ba20', 
        // },
        data: formData
    };

    await Axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            data.push(response.data);
            showMessage(response.status, 'success', "post done")
        })
        .catch(function (error) {
            console.log(error, 'as');
            data.push(error);
            showMessage(error.response.status, "error", JSON.stringify(error.message))
        });

    // await Axios.post(url+api, {data:formData} )
    //     .then(function (response) {
    //         data.push(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);

    //     });
    return (data[0]);
}


