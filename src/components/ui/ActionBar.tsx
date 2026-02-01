type ActionItem = {
  label: string
  onClick?: () => void
  className: string
}

type Props = {
  items: ActionItem[]
}

const ActionBar = ({ items }: Props) => {
  return (
    <div className="flex">
      {items.map((item, index) => {
        const isFirst = index === 0
        const clipPath =
          "polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%)"

        return (
          <button
            key={item.label}
            onClick={item.onClick}
            className={`
              relative flex items-center justify-center
              px-6 py-3 text-xs font-medium text-white
              whitespace-nowrap
              ${item.className}
              ${!isFirst && "-ml-4"}
              transition hover:brightness-110
            `}
            style={{ clipPath }}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default ActionBar



// export function ActionBar({ items }: Props) {
//   return (
//     <div className="flex items-center">
//       {items.map((item, index) => {
//         const isFirst = index === 0

//         return (
//           <button
//             key={index}
//             onClick={item.onClick}
//             className={`
//               relative flex items-center justify-center
//               px-4 py-1.5
//               text-xs font-medium text-white
//               whitespace-nowrap

//               ${item.className}
//               ${!isFirst && "-ml-3"}

//               transition hover:brightness-110
//             `}
//             style={{
//               clipPath:
//                 "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)",
//             }}
//           >
//             {item.label}
//           </button>
//         )
//       })}
//     </div>
//   )
// }
