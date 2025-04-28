import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";

export const DocumentChecklist = {
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
  documents: [
    {
      title: "Inventory Registers",
      des: "Complete stock registers showing opening balance, purchases, sales, and closing balance",
      image: BankStatementImage,
    },
    {
      title: "Stock Ledgers",
      des: "Detailed ledgers showing movement of each inventory item",
      image: BankStatementImage,
    },
    {
      title: "Purchase Orders & Invoices",
      des: "All purchase orders and supplier invoices related to inventory",
      image: BankStatementImage,
    },
    {
      title: "Goods Receipt Notes",
      des: "Documentation confirming receipt of inventory items",
      image: BankStatementImage,
    },
    {
      title: "Sales Invoices",
      des: "Copies of sales invoices to verify inventory outflow",
      image: BankStatementImage,
    },
    {
      title: "Physical Verification Reports",
      des: "Previous inventory count reports and reconciliations",
      image: BankStatementImage,
    },
    {
      title: "Valuation Methods Documentation",
      des: "Documentation on inventory valuation methods (FIFO, LIFO, Weighted Average, etc.)",
      image: BankStatementImage,
    },
    {
      title: "Storage Location Maps",
      des: "Layout of warehouses and storage facilities to facilitate physical verification",
      image: BankStatementImage,
    },
    {
      title: "Damaged/Obsolete Inventory Records",
      des: "Details of written-off, damaged, or obsolete inventory items",
      image: BankStatementImage,
    }
  ],
};
