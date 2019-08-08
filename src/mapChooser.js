function mapChooser(store) {
    if (!store) { store = 'default' }
    let imageName = store + ".jpg";
    return imageName;
}

export default mapChooser;
