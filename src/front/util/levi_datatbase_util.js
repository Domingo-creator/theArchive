import { object } from "prop-types";
import { leviDatabase } from "./levi_database";

export const ArchiveMatch = (
  input = "362550058",
  waistInput = 28,
  lengthInput = 28
) => {
  let oneHundredPercentMatch = [];
  let ninetyFivePercentMatch = [];
  let eightyFivePercentMatch = [];
  let fiftyPercentMatch = [];
  let twentyFivePercentMatch = [];

  let inputProduct = leviDatabase.filter((item) => item.Identifier == input)[0];
  let inputProductFitTaxonomy = new Set();
  inputProduct.Fit_Taxonomy_US.split(",").forEach((fit) => {
    inputProductFitTaxonomy.add(fit.trim());
  });

  // console.log(inputProductFitTaxonomy);
  // console.log(inputProduct);
  // console.log(leviDatabase.length);
  for (let i = 0; i < leviDatabase.length; i++) {
    if (leviDatabase[i].Identifier != input) {
      if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US &&
        checkFitMatch(inputProductFitTaxonomy, leviDatabase[i]) &&
        leviDatabase[i].Stretch_Taxonomy_US ==
          inputProduct.Stretch_Taxonomy_US &&
        checkMeasurementMatch(
          waistInput,
          lengthInput,
          inputProduct,
          leviDatabase[i]
        )
      ) {
        leviDatabase[i]["match"] = 100;
        oneHundredPercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US &&
        checkFitMatch(inputProductFitTaxonomy, leviDatabase[i]) &&
        checkMeasurementMatch(
          waistInput,
          lengthInput,
          inputProduct,
          leviDatabase[i]
        )
      ) {
        leviDatabase[i]["match"] = 95;
        ninetyFivePercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US &&
        checkMeasurementMatch(
          waistInput,
          lengthInput,
          inputProduct,
          leviDatabase[i]
        )
      ) {
        leviDatabase[i]["match"] = 85;
        eightyFivePercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US
      ) {
        leviDatabase[i]["match"] = 50;
        fiftyPercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US
      ) {
        leviDatabase[i]["match"] = 25;
        twentyFivePercentMatch.push(leviDatabase[i]);
      } else {
        break;
      }
    }
  }
  return [
    oneHundredPercentMatch,
    ninetyFivePercentMatch,
    eightyFivePercentMatch,
    fiftyPercentMatch,
    twentyFivePercentMatch,
  ];
};
console.log(leviDatabase.length, "length");

const checkFitMatch = (inputProductFitTaxonomy, potentialMatch) => {
  let potentialMatchFit = potentialMatch.Fit_Taxonomy_US?.split(",") || [];
  let matchFound = potentialMatchFit.some((fit) =>
    inputProductFitTaxonomy.has(fit.trim())
  );
  return matchFound;
};

const matchMeasurements = (size, optimalMeasurements, testMeasurements) => {
  return optimalMeasurements[size] == testMeasurements[size];
};

const checkMeasurementMatch = (
  waistInput,
  lengthInput,
  optimalJean,
  testJean
) => {
  let isMatch =
    matchMeasurements(waistInput, optimalJean.Waist, testJean.Waist) &&
    matchMeasurements(lengthInput, optimalJean.Length, testJean.Length);
  console.log("isMatch", isMatch);
  return isMatch;
};

///// TESTING
// checkMeasurementMatch(
//   28,
//   28,
//   { Waist: { 28: 28.2 }, Length: { 28: 28.2 } },
//   { Waist: { 28: 28.2 }, Length: { 28: 28.0 } }
// );
///////



export const getRandomJeanImage = () => {
  let imagePool = [
    "https://lsco.scene7.com/is/image/lsco/A15600003-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/527970310-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/362000180-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/227910147-front-pdp-lse?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/A36250002-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/726930111-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/362000236-dynamic1-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/A19670001-dynamic1-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/527970340-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/269860016-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/373430006-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    // "https://lsco.scene7.com/is/image/lsco/A49690000-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/levis/clothing/188810012-front-pdp.jpg?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/373500152-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/362000124-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/388430016-dynamic1-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/228610107-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
  ];
  return imagePool[Math.floor(Math.random() * imagePool.length)];
};

export const assembleRecocommendationList = (pc9, waistInput, lengthInput) => {
  let matches = ArchiveMatch(pc9, waistInput, lengthInput);
  return [
    ...matches[0],
    ...matches[1],
    ...matches[2],
    ...matches[3],
    ...matches[4],
  ];
};

export const paginateRecommendationList = (
  pc9,
  numPerPage,
  waistInput,
  lengthInput
) => {
  let paginated = [];
  let recommendationList = assembleRecocommendationList(
    pc9,
    waistInput,
    lengthInput
  );
  let curPage = [];
  for (let i = 0; i < recommendationList.length; i++) {
    curPage.push(recommendationList[i]);
    if (curPage.length === numPerPage) {
      paginated.push(curPage);
      curPage = [];
    }
  }
  if (curPage.length) paginated.push(curPage);
  return paginated;
};

////////////////////////////// UTIL REWRITE ////////////////////////////////
// Score Distribution in % => sum to 100 //
const GENDER_SCORE = 25;
const SIZE_GROUP_SCORE = 25;
const WAIST_LENGTH_SCORE = 35;
const FIT_SCORE = 10;
const STRETCH_SCORE = 5;
//////////////////////////

export const getArchiveMatches = (pc9Match, waistInput, lengthInput) => {
  let matches = []
  // let pc9Match = MatchPc9(pc9)
  let matchArrayMap = {100: 0, 95: 1, 92: 2, 85: 3, 83: 4, 78: 5,77: 6,74: 7,69: 8,68: 9,65: 10,60: 11,59: 12, 50: 13, 25: 14, 0: 15}
  for(let product of leviDatabase) {
    let score = getArchiveScore(pc9Match, product, waistInput, lengthInput);
    product.match = score;
    if(!(matchArrayMap[score] in matches)) matches[matchArrayMap[score]] = []
    matches[matchArrayMap[score]].push(product)
  }
  return matches.flat();
}


export const getArchiveScore = (pc9Match, testProduct, waistInput, lengthInput) => {
  // console.log(pc9Match, testProduct)
  let score = 0;
  if(pc9Match.Gender_Taxonomy_US == testProduct.Gender_Taxonomy_US) {
    score += GENDER_SCORE;
    if(pc9Match.Size_Group_Taxonomy_US == testProduct.Size_Group_Taxonomy_US) {
      score += SIZE_GROUP_SCORE
      score += scoreMeasurementMatch(pc9Match,testProduct, waistInput, lengthInput)
      if(isFitMatch(pc9Match, testProduct)) {
        score += FIT_SCORE
        if(!('Stretch_Taxonomy_US' in pc9Match) || pc9Match.Stretch_Taxonomy_US == testProduct.Stretch_Taxonomy_US)  {
          score += STRETCH_SCORE
        }
      }
    }
  }
  return score
}

export const MatchPc9 = (pc9) => {
  return leviDatabase.find((item) => item.Identifier == pc9);
};

const isFitMatch = (pc9Match, testProduct) => {
  let pc9FitTaxonomy = new Set();
  pc9Match.Fit_Taxonomy_US.split(",").forEach((fit) => {
    pc9FitTaxonomy.add(fit.trim());
  });
  let potentialMatchFit = testProduct.Fit_Taxonomy_US?.split(",") || [];
  return potentialMatchFit.some((fit) => pc9FitTaxonomy.has(fit.trim()));
};


const scoreMeasurementMatch = (pc9Match, testProduct, waistInput, lengthInput) => {
  if(!('Waist' in pc9Match)) return WAIST_LENGTH_SCORE;
  let waistDifference = Math.abs(pc9Match.Waist[waistInput] - testProduct.Waist[waistInput])
  let lengthDifference = Math.abs(pc9Match.Length[lengthInput] - testProduct.Length[lengthInput])
  if((waistDifference + lengthDifference) < .05) return WAIST_LENGTH_SCORE;
  if((waistDifference + lengthDifference) < .1) return Math.ceil(WAIST_LENGTH_SCORE * (3/4));
  if((waistDifference + lengthDifference) < .2) return Math.ceil(WAIST_LENGTH_SCORE * (2/4));
  if((waistDifference + lengthDifference) < .3) return Math.ceil(WAIST_LENGTH_SCORE * (1/4));
  return 0;
};


export const getArchiveMeasurementMatches = (waistInput, lengthInput, hipInput) => {
  let matches = []
  // let pc9Match = MatchPc9(pc9)
  let matchArrayMap = {100: 0, 90: 1, 80: 2, 70: 3, 60: 4, 50: 5, 40: 6, 30: 7,20: 8, 10: 9, 0: 10}
  for(let product of leviDatabase) {
    let score = scoreMeasurementMatchWitHip(waistInput, lengthInput, hipInput)
    product.match = score;
    if(!(matchArrayMap[score] in matches)) matches[matchArrayMap[score]] = []
    matches[matchArrayMap[score]].push(product)
  }
  return matches.flat();
}

const scoreMeasurementMatchWitHip = (waistInput, lengthInput, hipInput) => {
  for(let product of leviDatabase) {
    let waistDifference = Math.abs(waistInput - product.Waist[waistInput])
    let lengthDifference = Math.abs(lengthInput - product.Length[lengthInput])
    let hipDifference = Math.abs(hipInput - product.Hip[hipInput])
    if((waistDifference + lengthDifference + hipDifference) < .05) return 100;
    if((waistDifference + lengthDifference + hipDifference) < .1)  return 90;
    if((waistDifference + lengthDifference + hipDifference) < .15)  return 80;
    if((waistDifference + lengthDifference + hipDifference) < .2)  return 70;
    if((waistDifference + lengthDifference + hipDifference) < .25)  return 60;
    if((waistDifference + lengthDifference + hipDifference) < .3)  return 50;
    if((waistDifference + lengthDifference + hipDifference) < .35)  return 40;
    if((waistDifference + lengthDifference + hipDifference) < .4)  return 30;
    if((waistDifference + lengthDifference + hipDifference) < .45)  return 20;
    if((waistDifference + lengthDifference + hipDifference) < .5)  return 10;
    return 0;
  }
}
