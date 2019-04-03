const USER_INIT = "USER_INIT";

//userInit Kısmı User Action creater dır.
//Login olmuş kullanıcı geleceği için user parametresi alır.
//Eğer login olmamıssa ilk atama olarak boş {} obje atıldı.
//Burada Action Creator fonksiyonumuz sadece action döndürür ama biz middleware olarak react-thunk eklersek bir funksiyon döndürme özelliği sağlanabilir.
export function userInit(user = {}) {
    //Return Kısmı User Action dır
    return {
        type: USER_INIT,
        payload: user
    }
}

//2 parametre alır state->ilk başta başlangıç statidir sonra bir önceki state dir., action-> Bu paremetre action create de oluşturulan içerisinde type ve payload olan yapıdır.(Objedir Aslında)
//Zaten reducer bi önceki state i alır yeni state te çevirir.
export default function userReducer(state = {}, action) {
    switch (action.type) {
        case USER_INIT:
            return Object.assign({} , action.payload); //Yeni State Objesi don
        default:
            return state; //Eski State Objesi dön
    }
}

//Not-> State doğrudan değiştirisem mutibul ama önceki state min bir kopyasını alıp değiştirirsem inmutibul olur. 
//return action.payload (mutibul)
//return Object.assign({}, action.payload); (inmutibul )