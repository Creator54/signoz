/* eslint-disable sonarjs/no-duplicate-string */
import { K8sClustersData } from 'api/infraMonitoring/getK8sClustersList';
import { PANEL_TYPES } from 'constants/queryBuilder';
import { GetQueryResultsProps } from 'lib/dashboard/getQueryResults';
import { DataTypes } from 'types/api/queryBuilder/queryAutocompleteResponse';
import { EQueryType } from 'types/common/dashboard';
import { DataSource } from 'types/common/queryBuilder';
import { v4 } from 'uuid';

export const clusterWidgetInfo = [
	{
		title: 'CPU Usage, allocatable',
		yAxisUnit: '',
	},
	{
		title: 'Memory Usage, allocatable',
		yAxisUnit: 'bytes',
	},
	{
		title: 'Ready Nodes',
		yAxisUnit: '',
	},
	{
		title: 'NotReady Nodes',
		yAxisUnit: '',
	},
	{
		title: 'Deployments available and desired',
		yAxisUnit: '',
	},
	{
		title: 'Statefulset pods',
		yAxisUnit: '',
	},
	{
		title: 'Daemonset nodes',
		yAxisUnit: '',
	},
	{
		title: 'Jobs',
		yAxisUnit: '',
	},
];

export const getClusterMetricsQueryPayload = (
	cluster: K8sClustersData,
	start: number,
	end: number,
): GetQueryResultsProps[] => [
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '0224c582',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage (avg)',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'min',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: 'a0e11f0c',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage (min)',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'min',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: 'c775629c',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage (max)',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_node_allocatable_cpu--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_node_allocatable_cpu',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'D',
						filters: {
							items: [
								{
									id: '31f6c43a',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'allocatable',
						limit: null,
						orderBy: [],
						queryName: 'D',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '61a3c55e',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage (avg)',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'min',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '834a887f',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage (min)',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'min',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: '9b002160',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage (max)',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_node_allocatable_memory--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_node_allocatable_memory',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'D',
						filters: {
							items: [
								{
									id: '02a9a67e',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'allocatable',
						limit: null,
						orderBy: [],
						queryName: 'D',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_node_condition_ready--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_node_condition_ready',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'd7779183',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_node_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_node_name',
								type: 'tag',
							},
						],
						having: [
							{
								columnName: 'MAX(k8s_node_condition_ready)',
								op: '=',
								value: 1,
							},
						],
						legend: '{{k8s_node_name}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'max',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_node_condition_ready--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_node_condition_ready',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'd7779183',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_node_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_node_name',
								type: 'tag',
							},
						],
						having: [
							{
								columnName: 'MAX(k8s_node_condition_ready)',
								op: '=',
								value: 0,
							},
						],
						legend: '{{k8s_node_name}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'max',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TABLE,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_available--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_available',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'a7da59c7',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_deployment_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_deployment_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'available',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_desired--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_desired',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '55110885',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_deployment_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_deployment_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'desired',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: true,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TABLE,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_statefulset_current_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_statefulset_current_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '3c57b4d1',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_statefulset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_statefulset_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'current',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_statefulset_desired_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_statefulset_desired_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '0f49fe64',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_statefulset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_statefulset_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'desired',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_statefulset_ready_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_statefulset_ready_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: '0bebf625',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_statefulset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_statefulset_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'ready',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_statefulset_updated_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_statefulset_updated_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'D',
						filters: {
							items: [
								{
									id: '1ddacbbe',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_statefulset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_statefulset_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'updated',
						limit: null,
						orderBy: [],
						queryName: 'D',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: true,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TABLE,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_daemonset_current_scheduled_nodes--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_daemonset_current_scheduled_nodes',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'e0bea554',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_daemonset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_daemonset_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'current_nodes',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'last',
						spaceAggregation: 'avg',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_daemonset_desired_scheduled_nodes--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_daemonset_desired_scheduled_nodes',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '741052f7',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_daemonset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_daemonset_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'desired_nodes',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'last',
						spaceAggregation: 'avg',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_daemonset_ready_nodes--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_daemonset_ready_nodes',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: 'f23759f2',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_daemonset_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_daemonset_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'ready_nodes',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'last',
						spaceAggregation: 'avg',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: true,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TABLE,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_job_active_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_job_active_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'fd485d85',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_job_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_job_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'running',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_job_successful_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_job_successful_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: 'fc1beb81',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_job_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_job_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'successful',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_job_failed_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_job_failed_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: '97773348',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_job_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_job_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'failed',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_job_desired_successful_pods--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_job_desired_successful_pods',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'D',
						filters: {
							items: [
								{
									id: '5911618b',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: cluster.meta.k8s_cluster_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_job_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_job_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
						],
						having: [],
						legend: 'desired successful',
						limit: null,
						orderBy: [],
						queryName: 'D',
						reduceTo: 'last',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: true,
		start,
		end,
	},
];