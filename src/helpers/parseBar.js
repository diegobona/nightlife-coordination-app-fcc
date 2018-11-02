export default (data) => {
    return data.map(bar => {
        return {
            name: bar.name,
            rating: bar.rating,
            phone: bar.display_phone,
            address: bar.location.address1,
            distance: bar.distance,
            id: bar.id
        }
    })
}



// alias: "kredens-pub-bydgoszcz"
// categories: [{…}]
// coordinates: {latitude: 53.1211, longitude: 17.9959}
// display_phone: "+48 52 373 24 34"
// distance: 2857.188331943714
// id: "3K4pVspqfDA7GYPflw_u9Q"
// image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/JnO7e8xMBf2viI0Xj472mA/o.jpg"
// is_closed: false
// location: {address1: "ul. Wełniany Rynek 8", address2: null, address3: null, city: "Bydgoszcz", zip_code: "85-036", …}
// name: "Kredens Pub"
// phone: "+48523732434"
// price: "$$"
// rating: 4.5
// review_count: 8
// transactions: []
// url: "https://www.yel