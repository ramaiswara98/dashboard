const shortenName = (fullName) => {
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const firstInitial = firstName.charAt(0);
    const lastInitial = nameParts[1].charAt(0);
    const shortenedName = `${firstName}.${lastInitial}`;
    return shortenedName;
}

export default shortenName