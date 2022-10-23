const openInNewTab = (url) => {
    url ? window.open(url, "_blank", "noopener,noreferrer") : alert('There is no link for this item');
};

const openInSameTab = (url) => {
    window.open(url, "_self");
}

export {
    openInNewTab,
    openInSameTab
}