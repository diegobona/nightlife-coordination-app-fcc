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