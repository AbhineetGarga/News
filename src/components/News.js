import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
  articles = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Rhea Mogul, Manveena Suri, Jessie Yeung",
      title:
        "Search resumes as deadly Yeti Airlines crash highlights dangers of flying in Nepal - CNN",
      description:
        "Hundreds of emergency personnel on Monday resumed searching for four missing people following a deadly plane crash in Nepal that has once again highlighted the dangers of air travel in a country often referred to as one of the riskiest places to fly.",
      url: "https://www.cnn.com/2023/01/15/asia/nepal-air-travel-risks-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230115050552-03-pokhara-plane-crash-011523.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-16T04:31:00Z",
      content:
        "Hundreds of emergency personnel on Monday resumed searching for four missing people following a deadly plane crash in Nepal that has once again highlighted the dangers of air travel in a country ofte… [+3383 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Ben Baby",
      title: "Bengals' Sam Hubbard scoops fumble rumbles for 98-yard TD - ESPN",
      description:
        "With the Baltimore Ravens looking to take the lead in the fourth quarter, the Bengals' defense came up with a historic play.",
      url: "https://www.espn.com/nfl/story/_/id/35456020/joe-burrow-finds-jamarr-chase-7-yard-td",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0116%2Fr1118320_1296x729_16%2D9.jpg",
      publishedAt: "2023-01-16T03:56:15Z",
      content:
        "CINCINNATI -- The Cincinnati Bengals defense might have saved the team's season.\r\nWith the Baltimore Ravens looking to take the lead in the fourth quarter, the Bengals' defense came up with a histori… [+2314 chars]",
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Nick Romano",
      title:
        "How HBO's 'The Last of Us' pulled off its first big shocker - Entertainment Weekly News",
      description:
        "Series creators Craig Mazin and Neil Druckmann and star Pedro Pascal discuss the changes made to a game-changing sequence in the live-action drama.",
      url: "https://ew.com/tv/the-last-of-us-sarah-death-car-scene/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B940%2C346%5D&w=2000&h=${this.props.pageSize}00&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F01%2F14%2FThe-Last-of-Us-011423-03.jpg",
      publishedAt: "2023-01-16T03:25:00Z",
      content:
        "Warning: This article contains spoilers from The Last of Us episode 1.\r\nIn 2013, gamers lost their minds in the first 20 minutes of The Last of Us. Craig Mazin, who has since adapted this story with … [+${this.props.pageSize}044 chars]",
    },
    {
      source: { id: null, name: "Benzinga" },
      author: "Mehab Qureshi",
      title:
        "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
      description:
        "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession.",
      url: "https://www.benzinga.com/markets/cryptocurrency/23/01/304249${this.props.pageSize}/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
      urlToImage:
        "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
      publishedAt: "2023-01-16T02:50:45Z",
      content:
        "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Andy Rose",
      title:
        "University of Alabama basketball player Darius Miles is removed from the team after being charged with murder - CNN",
      description:
        "University of Alabama basketball player Darius Miles has been arrested and charged with murder in connection with a shooting near the campus Sunday which left a 23-year-old woman dead, Tuscaloosa law enforcement announced.",
      url: "https://www.cnn.com/2023/01/15/us/darius-miles-murder-charge-university-of-alabama-basketball/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230116${this.props.pageSize}1340-file-darius-miles.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-16T02:47:00Z",
      content:
        "University of Alabama basketball player Darius Miles has been arrested and charged with murder in connection with a shooting near the campus Sunday which left a 23-year-old woman dead, Tuscaloosa law… [+1987 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        'California storms: Record rainfall and more snow, but end of "parade of storms" is in sight - CBS News',
      description:
        "More rain and snow fell during the weekend in storm-battered California, making travel dangerous and prompting new evacuation orders near Sacramento.",
      url: "https://www.cbsnews.com/news/california-storms-record-rain-snow-evacuations/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/14/69214cb3-afff-422f-85cd-cb50289e4429/thumbnail/1200x630/be52b3bb9cef001d2da7c952cc135fb9/cbsn-fusion-another-powerful-storm-front-hits-california-amid-flooding-woes-thumbnail-1625317-640x360.jpg",
      publishedAt: "2023-01-16T01:37:00Z",
      content:
        "More rain and snow fell during the weekend in storm-battered California, making travel dangerous and prompting new evacuation orders over flooding concerns along a swollen river near Sacramento. And … [+3807 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "The Associated Press",
      title:
        "Miss USA R'Bonney Gabriel wins Miss Universe Competition - ABC News",
      description:
        "R’Bonney Gabriel, a fashion designer, model and sewing instructor from Texas, has been crowned Miss Universe",
      url: "https://abcnews.go.com/US/wireStory/miss-usa-rbonney-gabriel-wins-miss-universe-competition-96444071",
      urlToImage:
        "https://s.abcnews.com/images/US/wirestory_c1a25bf5cdac1aa2c2d173a087d81423_12x5_992.jpg",
      publishedAt: "2023-01-16T01:34:18Z",
      content:
        "NEW ORLEANS -- RBonney Gabriel, a fashion designer, model and sewing instructor from Texas who competition officials said is the first Filipino American to win Miss USA, was crowned Miss Universe on … [+2281 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Ryan Gaydos",
      title:
        "Daniel Jones, Saquon Barkley guide Giants to first playoff win since Super Bowl XLVI - Fox News",
      description:
        "The New York Giants stunned the Minnesota Vikings on Sunday with a 31-24 victory on the road to advance to the divisional round of the NFL playoffs.",
      url: "https://www.foxnews.com/sports/daniel-jones-saquon-barkley-guide-giants-first-playoff-win-super-bowl-xlvi",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Saquon-Barkley3.jpg",
      publishedAt: "2023-01-16T01:31:00Z",
      content:
        "Daniel Jones and Saquon Barkley came up clutch in moments when the New York Giants needed it the most and helped the team to their first playoff win since Super Bowl XLVI on Sunday.\r\nJones and Barkle… [+3118 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Terrifying near-miss between passenger planes at JFK Airport - NBC News",
      description:
        "The pilot of a Delta jet braked moments before colliding with an American Airlines plane. No one was hurt in the incident, but the Delta flight returned to t...",
      url: "https://www.youtube.com/watch?v=4gXYGRj9Fm8",
      urlToImage: "https://i.ytimg.com/vi/4gXYGRj9Fm8/maxresdefault.jpg",
      publishedAt: "2023-01-16T01:00:03Z",
      content: null,
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "The Conversation",
      title:
        "There's a Simple Way to Offset The Health Risks of Sitting All Day - ScienceAlert",
      description:
        "To reduce the harmful health effects of sitting, take a 5-minute light walk every half-hour.",
      url: "https://www.sciencealert.com/theres-a-simple-way-to-offset-the-health-risks-of-sitting-all-day",
      urlToImage:
        "https://www.sciencealert.com/images/2023/01/YoungManSitsAtComputerInDarkeness.jpg",
      publishedAt: "2023-01-16T00:58:00Z",
      content:
        "To reduce the harmful health effects of sitting, take a 5-minute light walk every half-hour. That's the key finding of a new study that my colleagues and I published in the journal Medicine &amp; Sci… [+4218 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Joel Calfee",
      title:
        "Prince Harry’s Team Took Over the Archewell Site to Congratulate Him on the Release of ‘Spare’ - Yahoo Life",
      description:
        "Prince Harry's long-awaited memoir, Spare, has finally hit shelves, and in order to celebrate the Duke of Sussex's achievement, some of those who have worked...",
      url: "https://www.yahoo.com/lifestyle/prince-harry-team-took-over-000500560.html",
      urlToImage:
        "https://media.zenfs.com/en/purewow_185/2990cf3ac52852d67f6fef07f85358ca",
      publishedAt: "2023-01-16T00:05:00Z",
      content:
        "Prince Harry's long-awaited memoir, Spare, has finally hit shelves, and in order to celebrate the Duke of Sussex's achievement, some of those who have worked closely beside him decided to take over t… [+1600 chars]",
    },
    {
      source: { id: null, name: "WESH Orlando" },
      author: "Scott Heidler",
      title:
        "SpaceX launches Falcon Heavy from Cape Canaveral - WESH 2 Orlando",
      description:
        "This is the fifth Falcon Heavy launch and there are four more planned for this year.",
      url: "https://www.wesh.com/article/spacex-falcon-heavy-launch-florida/42513969",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/falconheavy-jpg-1673824741.jpg?crop=0.837xw:1.00xh;0.0881xw,0&resize=1200:*",
      publishedAt: "2023-01-15T23:56:00Z",
      content:
        "BREVARD COUNTY, Fla. —SpaceX completed the launch of the Falcon Heavy rocket from the Space Coast. \r\nWith five million pounds of thrust, experts say the Heavy is the largest and most powerful rocket … [+1265 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Oscar Holland, CNN\n\nPhoto editor: Jennifer Arnow, CNN",
      title: "Best red carpet fashion at the 2023 Critics' Choice Awards - CNN",
      description:
        "See the best looks from LA's Fairmont Century Plaza Hotel, where stars are gathering for the 28th Critics' Choice Awards.",
      url: "https://www.cnn.com/style/article/red-carpet-critics-choice-2023/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/230115174812-20-critics-choice-red-carpet-lily-james-super-tease.jpg",
      publishedAt: "2023-01-15T23:36:06Z",
      content: "Oscar Holland, CNNPhoto editor: Jennifer Arnow, CNN",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Four killed in Alabama tornado were part of same family - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiaWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3Mvc3RhdGUtd2F0Y2gvMzgxNDQ3OC1mb3VyLWtpbGxlZC1pbi1hbGFiYW1hLXRvcm5hZG8td2VyZS1wYXJ0LW9mLXNhbWUtZmFtaWx5L9IBbWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3Mvc3RhdGUtd2F0Y2gvMzgxNDQ3OC1mb3VyLWtpbGxlZC1pbi1hbGFiYW1hLXRvcm5hZG8td2VyZS1wYXJ0LW9mLXNhbWUtZmFtaWx5L2FtcC8?oc=5",
      urlToImage: null,
      publishedAt: "2023-01-15T23:24:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Eric Revell",
      title:
        "Davos 2023: Climate activists protest the presence of oil giants at World Economic Forum - Fox Business",
      description:
        "Climate activists are staging protests in Davos, Switzerland, on the sidelines of this week's World Economic Forum to oppose the presence of oil and gas firms.",
      url: "https://www.foxbusiness.com/markets/davos-2023-climate-activists-protest-presence-oil-giants-world-economic-forum",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/GettyImages-1237983644.jpg?ve=1&tl=1",
      publishedAt: "2023-01-15T22:32:36Z",
      content:
        "Climate activists are crying foul over the presence of many of the world's largest oil and gas firms at this week's World Economic Forum – as protests erupted ahead of the event.\r\nThousands of global… [+3551 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "John Bacon, USA TODAY",
      title:
        "Ukraine live updates: 30 dead in Russia strike on apartment building - USA TODAY",
      description:
        "The explosions Saturday smashed through all nine floors of a building in Dnipro, Ukraine, that housed an estimated 1,700 people. Sunday updates.",
      url: "https://www.usatoday.com/story/news/world/2023/01/15/ukraine-russia-war-live-updates/1${this.props.pageSize}58597002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/01/15/USAT/3f7c53e4-647e-47dc-a5d6-d4d00fe1501d-AP_Russia_Ukraine_War_25.jpg?auto=webp&crop=3297,1855,x0,y186&format=pjpg&width=1200",
      publishedAt: "2023-01-15T22:30:00Z",
      content:
        "The death toll from a Russian missile strike in the southeastern city of Dnipro rose to 30 on Sunday as first responders picked through the rubble of an apartment building looking for survivors and b… [+3526 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Safid Deen, USA TODAY",
      title:
        "Josh Allen, Buffalo Bills outlast Miami Dolphins in AFC wild card win - USA TODAY",
      description:
        "Josh Allen threw three touchdowns and overcame three turnovers as Bills outlasted the Dolphins 34-31 during their playoff game Sunday.",
      url: "https://www.usatoday.com/story/sports/nfl/2023/01/15/josh-allen-buffalo-bills-score-miami-dolphins-wild-card/1${this.props.pageSize}5969${this.props.pageSize}02/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/01/15/USAT/bd42a31e-61d5-4e56-a8cf-1342ac8bbb48-AP_APTOPIX_Dolphins_Bills_Football_1.jpg?auto=webp&crop=2755,1550,x0,y0&format=pjpg&width=1200",
      publishedAt: "2023-01-15T22:18:45Z",
      content:
        "Josh Allen threw three touchdown passes and overcame three turnovers as the Buffalo Bills outlasted the Miami Dolphins 34-31 during their AFC wild-card playoff game on Sunday at Highmark Stadium in O… [+4713 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Bradford Betz",
      title:
        "WHO urges China to release more COVID-19 information after Beijing reports 60,000 coronavirus-related deaths - Fox News",
      description:
        "The World Health Organization says it encouraged China to release more COVID-19 data after it reported an estimated 60,000 coronavirus-related deaths since early December.",
      url: "https://www.foxnews.com/world/who-urges-china-release-more-covid-19-information-beijing-reports-60000-coronavirus-related-deaths",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/China.jpg",
      publishedAt: "2023-01-15T22:01:00Z",
      content:
        "The World Health Organization is urging China to keep releasing COVID-19 data after Beijing on Saturday reported nearly 60,000 coronavirus-related deaths since Dec. 8. \r\nBeijings announcement was the… [+2977 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "NY Democratic reps call on McCarthy, GOP to explain when they knew of Santos’s ‘web of lies’ - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMigwFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2hvdXNlLzM4MTQzODMtbnktZGVtb2NyYXRpYy1yZXBzLWNhbGwtb24tbWNjYXJ0aHktZ29wLXRvLWV4cGxhaW4td2hlbi${this.props.pageSize}aGV5LWtuZXctb2Ytc2FudG9zLXdlYi1vZi1saWVzL9IBhwFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2hvdXNlLzM4MTQzODMtbnktZGVtb2NyYXRpYy1yZXBzLWNhbGwtb24tbWNjYXJ0aHktZ29wLXRvLWV4cGxhaW4td2hlbi${this.props.pageSize}aGV5LWtuZXctb2Ytc2FudG9zLXdlYi1vZi1saWVzL2FtcC8?oc=5",
      urlToImage: null,
      publishedAt: "2023-01-15T21:35:00Z",
      content: null,
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Peru extends state of emergency in protest-hit cities - Reuters Canada",
      description:
        "Peru has extended a state of emergency for another month in the capital city of Lima and two southern regions where deadly protests against the government have sparked the country's worst violence in 20 years.",
      url: "https://www.reuters.com/world/americas/peru-extends-state-emergency-one-month-lima-puno-cusco-2023-01-15/",
      urlToImage:
        "https://www.reuters.com/resizer/R5xrFWumm_Q6jJQ-nizMAHghuhA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YZOZUIAWTBKWVKMMNJG6HVONY4.jpg",
      publishedAt: "2023-01-15T20:48:00Z",
      content:
        "LIMA, Jan 15 (Reuters) - Peru has extended a state of emergency for another month in the capital city of Lima and two southern regions where deadly protests against the government have sparked the co… [+2048 chars]",
    }
];


static defaultProps ={
  country: 'in',
  pageSize: 6,
  catagory: 'general'                            
}

static propTypes ={
country: propTypes.string,
pageSize: propTypes.number,
catagory: propTypes.string                            

}
  
  
  
  
  constructor() {
    super();
    console.log("Hello i m a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }




  // new learning
  async componentDidMount() {
    // console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=23cdca51ed864e49854e77a868e06d91&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false
    });
  }



  // handlepreclick = async () => {
  //   // console.log("previous");
  //   let url = `https://newsapi.org/v2/top-headlines?country=&category=${this.props.catagory}&apiKey=23cdca51ed864e49854e77a868e06d91&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({ articles: parsedData.articles });
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //       loading: false
  //   });
  // };

  // handlenextclick = async () => {
  //   // console.log("next");
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))){
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=23cdca51ed864e49854e77a868e06d91&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading: true});
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({ articles: parsedData.articles });
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false
  //     })
  //   }
  // }

   


  fetchMoreData = async() =>{
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=23cdca51ed864e49854e77a868e06d91&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // setPage(page + 1)
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles });
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
     totalResults: parsedData.totalResults, 
     loading: false,
    })
  
  };
  

  render() {
    console.log("render");
    return (
      <div className="container my-3">

  

        <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>News-monkey-top news 😒🤣😘</h1>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner />}
        >

        <div className="row my-3 mx-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element ? element.title : ""}n
                  desc={element ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
               
                />{" "}
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
       
      </div>
    );
  }
}
export default News;
