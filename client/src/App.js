import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Room from './components/Room';

const abortionProps = {
  proHeader: 'Pro Choice',
  neutralHeader: 'Neutral',
  conHeader: 'Pro Life',
  proLinks: ['https://web.mit.edu/pro-choice/www/facts.html'],
  proLinkNames: ['MIT Pro Choice'],
  neutralLinks: ['https://www.cdc.gov/reproductivehealth/data_stats/abortion.htm', 'https://www.who.int/news-room/fact-sheets/detail/abortion'],
  neutralLinkNames: ['CDC Statistics', 'World Health Organization'],
  conLinks: ['https://abort73.com/abortion_facts/us_abortion_statistics/'],
  conLinkNames: ['Abort 73'],
};
const immigrationProps = {
  proHeader: 'Pro Immigration',
  neutralHeader: 'Neutral',
  conHeader: 'Anti Immigration',
  proLinks: ['https://www.fwd.us/news/immigration-facts-the-positive-economic-impact-of-immigration/', 'https://www.epi.org/publication/immigration-facts/'],
  proLinkNames: ['FWD Economic Impact', 'Economic Policy Institute'],
  neutralLinks: ['https://www.pewresearch.org/fact-tank/2020/08/20/key-findings-about-u-s-immigrants/'],
  neutralLinkNames: ['PEW Research'],
  conLinks: ['https://www.fairus.org/issues/illegal-immigration?gclid=Cj0KCQjwteOaBhDuARIsADBqRegaG6eTbDV2VpyfUodqy8euvPvQc54GhV2pzpQe9m7SSqngHov1B9saApYKEALw_wcB',
    'https://www.fairus.org/issue/illegal-immigration/whats-wrong-illegal-immigration'],
  conLinkNames: ['FAIR Fast Facts', 'FAIR Costs of Immigration'],
};
const gunControlProps = {
  proHeader: 'Pro Gun Control',
  neutralHeader: 'Neutral',
  conHeader: 'Anti Gun Control',
  proLinks: ['https://www.npr.org/2022/05/27/1101774780/gun-control-debate-statistics', 'https://www.amnesty.org/en/what-we-do/arms-control/gun-violence/'],
  proLinkNames: ['NPR Stats', 'Amnesty Gun Violence'],
  neutralLinks: ['https://gun-control.procon.org/'],
  neutralLinkNames: ['Procon'],
  conLinks: ['https://www.americas1stfreedom.org/content/17-inconvenient-facts-for-the-gun-control-movement/', 'https://www.nraila.org/why-gun-control-doesn-t-work/'],
  conLinkNames: ['America\'s 1st Freedom', 'NRA ILA'],
};
const marijuanaProps = {
  proHeader: 'Pro Marijuana Legalization',
  neutralHeader: 'Neutral',
  conHeader: 'Anti Marijuana Legalization',
  proLinks: ['https://www.mpp.org/issues/legalization/top-ten-reasons-to-end-marijuana-prohibition/', 'https://www.investopedia.com/articles/insights/110916/economic-benefits-legalizing-weed.asp'],
  proLinkNames: ['MPP Legalize and Regulate', 'Investopedia Economic Benefit'],
  neutralLinks: ['https://marijuana.procon.org/'],
  neutralLinkNames: ['Procon'],
  conLinks: ['https://www.liberty.edu/champion/2022/03/pros-and-cons-weed-should-be-illegal/', 'https://www.drugrehab.us/news/why-recreational-marijuana-should-stay-illegal/'],
  conLinkNames: ['Liberty pros cons', 'Drug Rehab'],
};
const capitalPunishmentProps = {
  proHeader: 'Pro Capital Punishment',
  neutralHeader: 'Neutral',
  conHeader: 'Anti Capital Punishment',
  proLinks: ['https://www.heritage.org/crime-and-justice/commentary/the-death-penalty-appropriate',
    'https://www.scu.edu/mcae/publications/iie/v1n3/capital.html#:~:text=Capital%20punishment%20is%20often%20defended,killers%20do%20not%20kill%20again.'],
  proLinkNames: ['Heritage', 'Santa Clara University'],
  neutralLinks: ['https://deathpenalty.procon.org/'],
  neutralLinkNames: ['Procon'],
  conLinks: ['https://www.aclu.org/other/case-against-death-penalty', 'https://www.amnesty.org/en/what-we-do/death-penalty/'],
  conLinkNames: ['American Civil Liberties Union', 'Amnesty'],
};

const App = () => {
  const temp = 0;
  return (
    <div props={temp}>
      <Router>
        <Routes>
          <Route path="/abortion" element={<Room props={abortionProps} />} />
          <Route path="/guncontrol" element={<Room props={gunControlProps} />} />
          <Route path="/immigration" element={<Room props={immigrationProps} />} />
          <Route path="/capitalpunishment" element={<Room props={capitalPunishmentProps} />} />
          <Route path="/marijuana" element={<Room props={marijuanaProps} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
