import { useState } from "react";
import { getCountryOptions } from "./data";
import { getSubCategoryOptions } from "./data";
import { getAsinOptions } from "./data";
import { categoryOptions } from "./data";
import Dropdown from "./Dropdown";
import "./styles.css";

const getCompareChecked = (parentList, childList) => {
  return parentList.reduce((acc, item) => {
    const returnValue = childList.find((subCat) => subCat.value === item.value);

    return [
      ...acc,
      {
        ...item,
        checked: returnValue?.checked === false ? false : true,
      },
    ];
  }, []);
};

export default function App() {
  const [parentList, setParentList] = useState(() =>
    categoryOptions.map((item) => ({ ...item, checked: true }))
  );

  const [subCategoryList, setSubCategoryList] = useState(() =>
    getSubCategoryOptions(parentList).map((item) => ({
      ...item,
      checked: true,
    }))
  );

  const [asinList, setAsinList] = useState(() =>
    getAsinOptions(parentList, subCategoryList).map((item) => ({
      ...item,
      checked: true,
    }))
  );

  const [countryList, setCountryList] = useState(() =>
    getCountryOptions(parentList, subCategoryList, asinList).map((item) => ({
      ...item,
      checked: true,
    }))
  );

  return (
    <div className="App">
      <Dropdown
        title="Category"
        handleApply={(values) => {
          setParentList(values);

          const filteredValues = values.filter((v) => v.checked);

          const subCategory = getSubCategoryOptions(filteredValues);
          const subCatValues = getCompareChecked(subCategory, subCategoryList);
          setSubCategoryList(subCatValues);

          const asins = getAsinOptions(parentList, subCategory);
          const asinsValue = getCompareChecked(asins, asinList);
          setAsinList(asinsValue);
          // whenever category item unchecked, we also need to remove from its children

          const countries = getCountryOptions(parentList, subCategory, asins);
          const countriesValue = getCompareChecked(countries, countryList);
          setCountryList(countriesValue);
        }}
        list={parentList}
      />
      <Dropdown
        title="Sub Category"
        list={subCategoryList}
        handleApply={(values) => {
          setSubCategoryList(values);

          const asins = getAsinOptions(
            parentList,
            values.filter((v) => v.checked)
          );
          const asinValues = getCompareChecked(asins, asinList);
          setAsinList(asinValues);

          const countries = getCountryOptions(
            parentList,
            getSubCategoryOptions(parentList),
            asins
          );
          const countriesValue = getCompareChecked(countries, countryList);
          setCountryList(countriesValue);
        }}
      />
      <Dropdown
        title="ASIN"
        handleApply={(values) => {
          setAsinList(values);

          const countries = getCountryOptions(
            parentList,
            subCategoryList,
            values.filter((v) => v.checked)
          );
          const countriesValue = getCompareChecked(countries, countryList);
          setCountryList(countriesValue);
        }}
        list={asinList}
      />

      {/* <Dropdown
        title="Country"
        handleApply={(values) => {
          // console.log(values);
        }}
        list={countryList}
      /> */}
    </div>
  );
}
