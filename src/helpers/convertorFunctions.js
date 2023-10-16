export function convertImgToBase64(imgFile) {
    return new Promise ((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(imgFile)
        reader.onload = () => {
            resolve(reader.result)
        }

        reader.onerror =( err ) => {
            reject(err)
        }
    })
}