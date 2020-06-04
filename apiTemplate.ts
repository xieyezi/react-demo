import { CodeGenerator, Interface } from 'pont-engine'

const noLoadingApis = ['/order/create', '/share/image', '/agent_order/new/page/count']
// const noTipsApis = ['/share/image']
export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    // const requestBodyParams = inter.parameters.find(it => it.in === 'body')
    const bodyParmas = inter.getBodyParamsCode()

    const queryParamsType = 'IQueryParams'
    const queryParamsTmp = `queryParams:${queryParamsType}`
    const bodyParamsTmp = `bodyParams:${bodyParmas}`
    const paramsInterfaceTmp = `
    interface IParams{
      ${queryParamsTmp}
      ${bodyParmas ? bodyParamsTmp : ''}
    }
    `
    const requestParams = bodyParmas ? `{queryParams,bodyParams}` : `{queryParams}`
    // const judgeIsNeedImportBaseClass = `${
    //   bodyParmas ? "\n import * as defs from '../../baseClass' " : ''
    // }`
    const noLoading = Boolean(noLoadingApis.find(it => it === inter.path))
    return `
    /**
     * @desc ${inter.description}
     */
    import request from '@/utils/request'
    export ${inter.getParamsCode(queryParamsType)}
    export ${paramsInterfaceTmp}
    export function ${inter.name}(${requestParams}:IParams = {} as IParams) {
      return request({
        url: \`${inter.path}\`,
        method: '${inter.method}',
        noLoading:${noLoading},
        ${bodyParmas ? 'body: bodyParams' : 'params: queryParams'}
      });
    }
   `
  }
}
