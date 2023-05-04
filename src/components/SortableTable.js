import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data,config);

  const updatedConfig = config.map((configObject) => {
    if (!configObject.sortValue) {
      return configObject;
    }

    return {
      ...configObject,
      header: () => (
        <th
          onClick={() => setSortColumn(configObject.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            {handleIcons(configObject.label, sortBy, sortOrder)}
            {configObject.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

const handleIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === "asc") {
    return <GoArrowSmallUp />;
  }
  if (sortOrder === "desc") {
    return <GoArrowSmallDown />;
  }
};

export default SortableTable;
