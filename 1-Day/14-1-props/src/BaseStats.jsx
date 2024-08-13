import './BaseStats.css'

// export default function BaseStats( props )
export default function BaseStats({stats: {hp, attack, defense, speed}}) {
    return (
        <div className = 'base-stats'>
            <h1>Base Stats</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{defense}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{speed}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
}