import { notNullish } from '@nyxb/utils'
import { parseGitCommit } from 'craftchangelogs'
import type { GitCommit, RawGitCommit } from 'craftchangelogs'
import type { ChangelogenOptions } from './types'

export function parseCommits(commits: RawGitCommit[], config: ChangelogenOptions): GitCommit[] {
   return commits.map(commit => parseGitCommit(commit, config)).filter(notNullish)
}
