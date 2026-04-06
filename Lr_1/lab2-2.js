function isIPAddress(ip) {
    const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
}

function findRGBA(text) {
    const regex = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)/;
    const match = text.match(regex);
    return match ? match[0] : null;
}

function findHexColor(text) {
    const regex = /#(?:[0-9a-fA-F]{3}){1,2}\b/;
    const match = text.match(regex);
    return match ? match[0] : null;
}

function findTags(text, tag) {
    const regex = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
    return text.match(regex);
}

function findPosNum(text) {
    const regex = /\b\d+(?:\.\d+)?\b/g;
    const matches = text.match(regex);
    return matches ? matches.map(Number) : [];
}

function findDates(text) {
    const regex = /\d{4}-\d{2}-\d{2}/g;
    return text.match(regex) || [];
}

function findEmail(text) {
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(regex) || [];
}