const api = "";
const inp = document.getElementById('inp')
const images = document.querySelector('.images')
const getImage = async () => {
    const methods = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${api}`
        },
        body: JSON.stringify(
            {
            "prompt" : inp.value,
            "n" : 5,
            "size" : "512x512"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    const data = await res.json()
    const listImages = data.data;
    //console.log(data)
    images.innerHTML = ''
    listImages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img");
        container.append(img)
        img.src = photo.url
    })
    
}
