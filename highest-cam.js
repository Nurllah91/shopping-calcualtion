
const AvailablePhones = [
    {brand: "Samsung", price: 60000, camera: 64, ram: 6, Storage: 128, color: "black"},
    {brand: "iPhone", price: 120000, camera: 12, ram: 4, Storage: 128, color: "golden"},
    {brand: "Xiaomi", price: 85000, camera: 105, ram: 8, Storage: 128, color: "ocean red"},
    {brand: "Vivo", price: 45000, camera: 64, ram: 11, Storage: 128, color: "black"},
    {brand: "Oppo", price: 38000, camera: 48, ram: 6, Storage: 128, color: "golden"},
    {brand: "techno", price: 22000, camera: 32, ram: 6, Storage: 128, color: "white"}
];


function probablePhone(AvailablePhones){
    let highestCam = AvailablePhones[0]; 
    for(let i=0; i < AvailablePhones.length; i++){
        let phone = AvailablePhones[i];
        if(phone.camera >highestCam.camera){
            highestCam = phone;
        }


    }
    return highestCam;
}


const suggested = probablePhone(AvailablePhones);
console.log(suggested);