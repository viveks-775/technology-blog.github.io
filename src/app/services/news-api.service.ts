import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey = '1ce8c173b35c4c3eb0dd652eac10157c';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private country = 'in'; // Replace with your desired country code
  private posts: any[] = [];
  constructor(private httpClient: HttpClient) {
    // this.getPosts();
   }

  getPosts(): any {
    // const url = `${this.apiUrl}?country=${this.country}&apiKey=${this.apiKey}`;
    // return this.httpClient.get(url);

    this.posts = [
      {
        "id": "1",
        "author": "Livemint",
        "title": "RIL Q1 Results LIVE: Reliance Jio net profit rises 12% to ₹4863 crore - Mint",
        "description": "RIL Q1 results LIVE: Reliance Jio reported a net profit of  ₹4,863 crore. The Mukesh Ambani-led conglomerate is expected to report muted earnings in the first quarter of fiscal 2023-24 primarily due to its oil-to-chemicals (O2C) business, despite steady growt…",
        "url": "https://www.livemint.com/companies/company-results/ril-q1-results-live-ril-share-price-in-focus-as-reliance-posts-earnings-today-ril-net-profit-reliance-net-profit-11689872481752.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/20/600x338/rel_1689872730355_1689872730626.jpg",
        "publishedAt": "2023-07-21T12:26:11Z",
        "content": `RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. 
        RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm.
        RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm.`
      },
      {
        "id": "2",
        "author": "PTI",
        "title": "IISc researchers design synthetic peptide capable of poisoning antibiotic-resistant bacteria - Deccan Herald",
        "description": "Researchers at the Indian Institute of Science (IISc) have designed a short peptide capable of poisoning a key enzyme in disease-causing bacteria, including some of most deadly and antibiotic-resistant species. Made from a short stretch of about 24 amino acid…",
        "url": "https://www.deccanherald.com/science-and-environment/iisc-researchers-design-synthetic-peptide-capable-of-poisoning-antibiotic-resistant-bacteria-1239200.html",
        "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/07/21/iisc-dh-1-1201161-1679100299-1203339-1679695615-1214531-1682899248-1230354-1687466795-1234324-1688610152-1236139-1689169983-1239200-1689924827.jpg",
        "publishedAt": "2023-07-21T07:33:47Z",
        "content": `Researchers at the Indian Institute of Science (IISc) have designed a short peptide capable of poisoning a key enzyme in disease-causing bacteria, including some of most deadly and antibiotic-resista. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm. RIL Q1 results LIVE: Reliance Industries Ltd (RIL) is set to announce its April-June quarter results for the current fiscal today, a day after the demerger of its financial services arm.`
      },
      {
        "id": "3",
        "author": "https://www.india.com/author/sportsdesk/",
        "title": "LIVE Updates | WI vs IND, 2nd Test Score, Day 2: Will Rain Play SPOILSPORT? - India.com",
        "description": "LIVE Updates | Ind vs WI, 2nd Test Score: West Indies vs India, 2nd Test - Live Cricket Score, Commentary. Check LIVE streaming deets. Kohli-Jadeja Key For India.",
        "url": "https://www.india.com/sports/live-cricket-score-india-vs-west-indies-2nd-test-day-2-updates-queens-park-oval-trinidad-rain-ind-vs-wi-live-streaming-fancode-jiocinema-virat-kohli-500-rohit-yashasvi-jadeja-kishan-news-6177028/",
        "urlToImage": "https://static.india.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-20-at-12.43.17-PM.jpeg",
        "publishedAt": "2023-07-21T11:33:15Z",
        "content": `LIVE Updates | Ind vs WI, 2nd Test Score: West Indies vs India, 2nd Test - Live Cricket Score, Commentary. Check LIVE streaming deets. Kohli-Jadeja Key For India. \r\nVirat Kohli\r\nRavindra Jadeja\r\nKrai. LIVE Updates | Ind vs WI, 2nd Test Score: West Indies vs India, 2nd Test - Live Cricket Score, Commentary. Check LIVE streaming deets. Kohli-Jadeja Key For India. \r\nVirat Kohli\r\nRavindra Jadeja\r\nKrai. LIVE Updates | Ind vs WI, 2nd Test Score: West Indies vs India, 2nd Test - Live Cricket Score, Commentary. Check LIVE streaming deets. Kohli-Jadeja Key For India. \r\nVirat Kohli\r\nRavindra Jadeja\r\nKrai.`
      },
      {
        "id": "4",
        "author": "HT Entertainment Desk",
        "title": "Ram Charan's mother-in-law shares sweetest pic of him, Upasana and daughter - Hindustan Times",
        "description": "Ram Charan holds daughter girl Klin Kaara in his arms as he poses with wife Upasana and their pet dog for a cute family photo.",
        "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/ram-charan-sweetest-pic-upasana-konidela-baby-101689937911538.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/21/1600x900/Upasana_Konidela_1689938205199_1689938260996.jpg",
        "publishedAt": "2023-07-21T11:28:54Z",
        "content": "Last month, actor Ram Charan and wife Upasana Konidela announced that they have named their newborn daughter Klin Kaara Konidela. On July 20, Upasana celebrated her first birthday as a mom. Exactly a… [+1925 chars]"
      },
      {
        "id": "5",
        "author": "Tech Desk",
        "title": "iPhone 15 Pro may face severe shortages initially owing to display woes - The Indian Express",
        "description": "The iPhone 15 Pro and Pro Max are expected to feature the thinnest bezels on any phone, but at a cost.",
        "url": "https://indianexpress.com/article/technology/tech-news-technology/apples-iphone-15-pro-models-may-have-limited-supply-at-launch-because-of-display-issues-8852734/",
        "urlToImage": "https://images.indianexpress.com/2023/07/iphone-14-featured.jpg",
        "publishedAt": "2023-07-21T11:15:04Z",
        "content": "Apple’s iPhone 15 Pro and iPhone 15 Pro Max may face “severe shortages” in September due to production issues with the displays, according to a new report from The Information. The report cites two s… [+766 chars]"
      },
      {
        "id": "6",
        "author": null,
        "title": "Varanasi Court Allows Survey Of Gyanvapi Mosque Barring Spot Sealed Earlier - NDTV",
        "description": "The Varanasi Court today allowed a \"scientific survey\" of the entire Gyanvapi mosque premises, except the 'wuzukhana' area which was sealed on the Supreme Court's directions, by the Archaeological Survey of India (ASI).",
        "url": "https://www.ndtv.com/india-news/varanasi-court-allows-scientific-survey-of-gyanvapi-mosque-barring-spot-sealed-earlier-4229208",
        "urlToImage": "https://c.ndtvimg.com/2022-09/6tbusq7o_gyanvapi-mosque-650_625x300_13_September_22.jpg",
        "publishedAt": "2023-07-21T10:52:56Z",
        "content": "Gyanvapi Mosque Case: The application was moved in May this year by four women worshippers.\r\nNew Delhi: The Varanasi District Court today allowed a \"scientific survey\" of the entire Gyanvapi mosque p… [+2512 chars]"
      },
      {
        "id": "7",
        "author": null,
        "title": "A model-based approach to estimating vaccine effectiveness against SARS-CoV-2 variants of concern - News-Medical.Net",
        "description": "A group of researchers examined the effectiveness of updated vaccines and variant-matched boosters.",
        "url": "https://www.news-medical.net/news/20230721/A-model-based-approach-to-estimating-vaccine-effectiveness-against-SARS-CoV-2-variants-of-concern.aspx",
        "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_754296_16899365947345083.jpg",
        "publishedAt": "2023-07-21T10:51:00Z",
        "content": "In a recent study published in Nature Communications, a group of researchers examined\r\nthe effectiveness of updated vaccines and variant-matched boosters against the severe acute respiratory syndrome… [+6517 chars]"
      },
      {
        "id": "8",
        "author": "Bharat Sharma",
        "title": "Metal Shows 'Self-Healing' Properties At Nanoscale, Scientists Find - Indiatimes.com",
        "description": "Scientists have found that metal has the ability to \"heal itself.\" A team from the Sandia National Laboratories and Texam A&M University observed a cracked piece of platinum fuse back together at the molecular level.While it's not as radical as a metal healin…",
        "url": "https://www.indiatimes.com/technology/science-and-future/metal-shows-self-healing-properties-at-nanoscale-609809.html",
        "urlToImage": "https://im.indiatimes.in/content/2023/Jul/FBImage11-6_64ba6446d49d9.jpg",
        "publishedAt": "2023-07-21T10:46:46Z",
        "content": "Scientists have found that metal has the ability to \"heal itself.\" A team from the Sandia National Laboratories and Texam A&amp;M University observed a cracked piece of platinum fuse back together at… [+2432 chars]"
      },
      {
        "id": "9",
        "author": "etimes.in",
        "title": "Amy Jackson shares a kiss with beau Ed Westwick as she takes him out for Mumbai darshan - See photos - IndiaTimes",
        "description": "Amy Jackson and boyfriend Ed Westwick toured Mumbai, taking photos at Gateway of India and the Taj Mahal Palace Hotel. After visiting several sights,",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/amy-jackson-shares-a-kiss-with-beau-ed-westwick-as-she-takes-him-out-for-mumbai-darshan-see-photos/articleshow/102013503.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102013503,width-1070,height-580,imgsize-54938,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-07-21T10:40:00Z",
        "content": "Kajol, Deepika Padukone to Nora Fatehi: Best dressed celebs at Manish Malhotra's Bridal Couture show"
      },
      {
        "id": "10",
        "author": "Livemint",
        "title": "Boat unveils smart ring with heart rate monitoring, SpO2 tracking and other health features | Mint - Mint",
        "description": "Indian wearable devices brand, Boat, has launched its first smart ring, offering health and fitness monitoring features such as heart rate, sleep and menstrual cycle tracking. The device will be available on e-commerce platforms including Amazon and Flipkart.",
        "url": "https://www.livemint.com/technology/gadgets/boat-unveils-smart-ring-with-heart-rate-monitoring-spo2-tracking-and-other-health-features-11689935320144.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/21/600x338/boat_1689935391078_1689935396604.png",
        "publishedAt": "2023-07-21T10:32:18Z",
        "content": "Boat, a prominent wearable devices brand in India, has introduced its latest addition, the Boat Smart Ring. This marks the brand's initial venture into the smart ring segment. As the name implies, th… [+1671 chars]"
      },
      {
        "id": "11",
        "author": "Moneycontrol News",
        "title": "Go First gets DGCA approval to resume flight operations, subject to conditions - Moneycontrol",
        "description": "Among the conditions mentioned, DGCA noted that scheduled flight operations will be approved for commencement only after the availability of the required interim funding and approval of flight schedule by the regulator.",
        "url": "https://www.moneycontrol.com/news/business/companies/go-first-gets-dgca-approval-to-resume-operations-subject-to-conditions-11002831.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/05/gofirstparked-652x435.jpg",
        "publishedAt": "2023-07-21T10:29:01Z",
        "content": "The Directorate General of Civil Aviation (DGCA) on July 21 accepted debt-laden airline Go First's resumption plan subject to conditions, including scheduled flight operations that will be approved f… [+3074 chars]"
      },
      {
        "id": "12",
        "author": null,
        "title": "Project K: First Glimpse Of Kalki 2898 AD Shows Prabhas, Deepika Ruled By Dark Forces - DNAIndiaNews",
        "description": "Prabhas' Project K, directed by Nag Ashwin, has now got a new title - Kalki 2898 AD. The film made its debut at San Diego Comic-Con (SDCC) 2023. Project K, w...",
        "url": "https://www.youtube.com/watch?v=q3l2s8p-Lfo",
        "urlToImage": "https://i.ytimg.com/vi/q3l2s8p-Lfo/maxresdefault.jpg",
        "publishedAt": "2023-07-21T10:28:44Z",
        "content": null
      },

    ]

    return this.posts;

  }

  deletePost(postId:string){
    this.posts = this.posts.filter((post) => post.id !== postId);
  }


  addPost(post: any) {
    this.posts.push(post);
  }

}
