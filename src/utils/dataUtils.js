import * as data from '../data/data';

export const fatchMdData = async (type, name) => {
    name = name?.toLowerCase() || "";
    if (name) {
        let response = await fetch(`../../components/${type}Demo/${name}.md`);
        const data = response.text() || "";
        return data;
    } else {
        return ""
    }

}

export const getDataByType = async (type) => {
    let typeData = data[`${type}Data`] || [];
    //TODO :取得所有commponents 的md 資料
    console.log("typeData", typeData);
}