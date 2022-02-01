const siteUrl = "https://www.denizarca.com";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: { policies: [ {userAgent: "*", allow: "/"} ] }
};

