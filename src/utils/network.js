import axios from "axios";

function post(url, parameter, config) {
    url = url.startsWith('http') ? url : window.config.SERVER_IP + url

    config = config || {}
    config['headers'] = {'Authorization':'Bearer '+ localStorage.getItem('token')}

    return axios.post(url, parameter, config)
}

function get(url, config) {
    url = url.startsWith('http') ? url : window.config.SERVER_IP + url

    config = config || {}
    config['headers'] = {'Authorization':'Bearer '+ localStorage.getItem('token')}

    return axios.get(url, config)
}

export default {
    post,
    get
}