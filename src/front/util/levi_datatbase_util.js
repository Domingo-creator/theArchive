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

export const MatchPc9 = (pc9 = "362550058") => {
  return leviDatabase.find((item) => item.Identifier == pc9);
};

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


// Score Distribution in % => sum to 100 //
const GENDER_SCORE = 25;
const SIZE_GROUP_SCORE = 25;
const WAIST_LENGTH_SCORE = 35;
const FIT_SCORE = 10;
const STRETCH_SCORE = 5;
//////////////////////////

export const getArchiveMatches = (pc9Input = "362550058", waistInput, lengthInput) => {
  let matches = [[],[],[],[],[],[]]
  let pc9Match = leviDatabase.find( product => product.Identifier = pc9Input)
  let matchArrayMap = {100: 0, 95: 1, 85: 2, 50: 3, 25: 4, 0: 5}
  for(let product of leviDatabase) {
    let score = getArchiveScore(pc9Match, product, waistInput, lengthInput);
    matches[matchArrayMap[score]].push(product)
  }
  return matches;
}

export const getArchiveScore = (pc9Match, testProduct, waistInput, lengthInput) => {
  let score = 0;
  if(pc9Match.Gender_Taxonomy_US == testProduct.Gender_Taxonomy_US) {
    score += GENDER_SCORE;
    if(pc9Match.Size_Group_Taxonomy_US == testProduct.Size_Group_Taxonomy_US) {
      score += SIZE_GROUP_SCORE
      if(isMeasurementMatch(pc9Match, testProduct, waistInput, lengthInput)) {
        score += WAIST_LENGTH_SCORE
        if(isFitMatch(pc9Match, testProduct)) {
          score += FIT_SCORE
          if(pc9Match.Stretch_Taxonomy_US == testProduct.Stretch_Taxonomy_US) {
            score += STRETCH_SCORE
          }
        }
      }
    }
  }
  return score
}


const isFitMatch = (pc9Match, testProduct) => {
  let pc9FitTaxonomy = new Set();
  pc9Match.Fit_Taxonomy_US.split(",").forEach((fit) => {
    pc9FitTaxonomy.add(fit.trim());
  });
  let potentialMatchFit = testProduct.Fit_Taxonomy_US?.split(",") || [];
  return potentialMatchFit.some((fit) => pc9FitTaxonomy.has(fit.trim()));
};


const isMeasurementMatch = (pc9Match, testProduct, waistInput, lengthInput) => {
  let isWaistMatch;
  let isLengthMatch;
  if(waistInput) {
    isWaistMatch = pc9Match.Waist[waistInput] == testProduct.waist[waistInput]
  } else {
    isWaistMatch = isAverageMatch(pc9Match.Waist, testProduct.Waist) 
  }
  if(lengthInput) {
    isLengthMatch = pc9Match.Length[lengthInput] == testProduct.Length[lengthInput]
  } else {
    isLengthMatch = isAverageMatch(pc9Match.Length, testProduct.Length)
  }
  return isWaistMatch && isLengthMatch
};

// used for filter
// Return true if the average size is less than .1
const isAverageMatch = (pc9Sizes, testProductSizes) => {
  let difference = 0;
  let comparisons = 0;
  for(let size in pc9Sizes) {
    if(size in testProductSizes) {
      difference += Math.abs(pc9Sizes[size] - testProductSizes[size])
      comparisons++;
    }
  }
  return difference/comparisons < .1;
}