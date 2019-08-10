function mapChooser(location) {
    if (!location) { location = 'none' }
    let imageName = location + ".png";
    return imageName;
}

export default mapChooser;
