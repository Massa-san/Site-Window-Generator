export class Flow {
    execute() {}
}

export async function run(list: (Flow | string)[]) {
    for (const flow of list) {
        if (typeof flow === 'string' && flow === 'sleep') {
            await sleep(5000);
        } else if (flow instanceof Flow) {
            flow.execute()
        }
    }
}

async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}