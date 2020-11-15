const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
//const writeStream = fs.createWriteStream("break_lease.csv", { flags: "w" }); //append mode
//const writeStream = fs.createWriteStream("rental-price.csv");
const converter = require("json-2-csv");
const baseUrl = 'https://www.domain.com.au/3207-371-little-lonsdale-street-melbourne-vic-3000-14652693?topspot=1';
//Write Headers
//writeStream.write(`Title, Content \n`);
request(
  baseUrl,
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      console.log("hello");
      const $ = cheerio.load(html);

      //1. location
      const location = $(".css-164r41r");
      const siteLocation = location.text()
      console.log(siteLocation);
      //2. Type
      const type = $(".css-1rzse3v");
      const siteBed = type.first().text();
      //console.log(siteBed);
      const siteBath = type.eq(1).text();
      //console.log(siteBath);
      const siteType = siteBed + " " + siteBath;
      console.log(siteType);
      //3. Price
      const price = $(".css-1texeil");
      const sitePrice = price.text();
      console.log(sitePrice);
      //4. Origin
      const origin = $(".css-1ruq896");
      const siteOrigin = origin.find("a").attr('href');
      console.log(siteOrigin);
      //method 2
      //console.log($('div[data-testid="header__toolbar-inner"]').find('a').attr('href'));

      //5. Available date
      const siteAvail = $('div[data-testid="listing-details__summary-strip"]').find('li').first().text();
      console.log(siteAvail);

      //6.reference
      const siteImg = $('div[data-testid="listing-details__gallery-preview single-image-full"]').find('img').attr('src');
      console.log(siteImg);
      // $("img").each((index, image)=>{

      //   var img = $(image).attr('src');
      //   var Links = baseUrl + img;
      //   console.log("2nd one"+Links);
      // });



      //write row to csv
      // writeStream.write(`${title}, ${content} \n`);

      //Our JSON output
      const contentJSON = {
        Location: siteLocation.trim(),
        Property_type: siteType.trim(),
        Price: sitePrice.trim(),
        Origin: siteOrigin.trim(),
        Available_Date: siteAvail.trim(),
        Img_reference: siteImg.trim()
      };
      const price_Final = JSON.stringify(contentJSON);
      const filename = "pc_domain" + ".json";
      fs.writeFileSync(filename, price_Final);
    }
  }
);

module.exports