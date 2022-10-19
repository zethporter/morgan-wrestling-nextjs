const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const openInSameTab = (url) => {
    window.open(url, "_self");
}

export {
    openInNewTab,
    openInSameTab
}