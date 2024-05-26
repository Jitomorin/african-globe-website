import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function CheckOffLoansTab() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Features And Benefits" color="primary" variant="light">
        <Tab key="features-and-benefits" title="Features And Benefits">
          <Card>
            <CardBody>
              {/* content */}
              <div className="max-w-xl py-4 px-2">
                <h1 className="md:text-xl font-bold">
                  Apply for this loan with us and take advantage of the
                  following features and benefits.
                </h1>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    These loans typically do not require any security
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    Usually processed very quickly
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5 min-w-5 min-h-5" />
                  <p className="text-tiny md:text-base">
                    Repayment terms are more flexible than our other loan types
                  </p>
                </span>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="application-requirements" title="Application Requirements">
          <Card>
            <CardBody>
              <div className="max-w-xl py-4 px-2">
                <h1 className="md:text-xl font-bold">
                  To apply for this loan, the following details and documents
                  are required.
                </h1>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    3 months latest payslips (certified)
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    Your original ID and 2 copies of the same
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5 min-w-5 min-h-5" />
                  <p className="text-tiny md:text-base">Job ID if available</p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5 min-w-5 min-h-5" />
                  <p className="text-tiny md:text-base">
                    2 copies of your KRA pin certificate
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5 min-w-5 min-h-5" />
                  <p className="text-tiny md:text-base">
                    2 colored passport size photos of you
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5 min-w-5 min-h-5" />
                  <p className="text-tiny md:text-base">
                    6 months certified salary bank statement
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5 min-w-5 min-h-5" />
                  <p className="text-tiny md:text-base">
                    6 months certified M-pesa statement
                  </p>
                </span>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
