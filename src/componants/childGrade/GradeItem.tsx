import React from "react"

const GradeItem = React.memo(
  ({
    name,
    id,
    onClick,
    selectedItemClass,
  }: {
    id: string
    name: string
    selectedItemClass: string
    onClick: (val: string) => void
  }) => {
    return (
      <>
        <div
          className="mx-auto max-w-7xl px-6 lg:px-8 "
          onClick={() => onClick(id)}
          data-testid={"grade-item"}
        >
          <div
            data-testid={id}
            className={`mx-auto ${selectedItemClass} mt-2 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none`}
          >
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl uppercase font-bold tracking-tight text-gray-900">
                {name}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <img
                    src="https://euka.edu.au/wp-content/themes/euka/assets/images/euka-future-learning-logo.svg"
                    className="h-8"
                    alt="Euka Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
)

export default GradeItem
